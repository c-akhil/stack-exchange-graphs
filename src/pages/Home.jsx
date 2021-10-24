import React, { useEffect, useState } from "react";
import Bar from "../components/chats/Bar";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Home() {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch('https://api.stackexchange.com/2.2/tags?pagesize=30&order=desc&sort=popular&site=stackoverflow').then((res) => res.json()).then((list) => {
            if (list && list.items) {
                setTags(list.items.map(({ name, count }) => ({
                    "primary": name,
                    "secondary": +count
                })))
            }
        })
    }, [])


    return (
        <ErrorBoundary>
            <Layout>
                <div className="mt-5 d-flex justify-content-center">
                    <div>
                        {tags && tags.length > 0 && <Bar data={[{
                            "label": "Stack Exchange",
                            "data": tags
                        }]} />}
                    </div>
                </div>
            </Layout>
        </ErrorBoundary>
    )
}