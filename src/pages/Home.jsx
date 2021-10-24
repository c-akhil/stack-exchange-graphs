import React, { useEffect, useState } from "react";
import Bar from "../components/chats/Bar";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Home() {

    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow').then((res) => res.json()).then((list) => {
            setLoading(false);
            if (list && list.items) {
                setTags(list.items.map(({ name, count }) => ({
                    "primary": name,
                    "secondary": +count
                })))
            }
        }).catch((e) => {
            console.error(e);
            setLoading(false);
            setTags([])
        })
    }, [])


    return (
        <ErrorBoundary>
            <Layout>
                <div className="mt-5 d-flex justify-content-center">
                    {loading ? 'Loading Stack Exchange data ...' : <div>
                        {tags && tags.length > 0 && <Bar data={[{
                            "label": "Stack Exchange",
                            "data": tags
                        }]} />}
                    </div>}
                </div>
            </Layout>
        </ErrorBoundary>
    )
}