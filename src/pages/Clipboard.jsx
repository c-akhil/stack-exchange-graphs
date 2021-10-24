import React, { useState } from "react";
import { toast } from "react-toastify";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";
import { debounce } from "../utils/jsutils";

const copyToClipboard = debounce((text) => {
    navigator.clipboard.writeText(text).then(()=>{
        toast.success('Copied to clipboard !!!')
    });
})

export default function Clipboard() {

    const [copyText, setCopyText] = useState('');

    return (
        <ErrorBoundary>
            <Layout>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            <h5 className="card-title">Copy to Clipboard</h5>
                        </div>
                        <div className="card-body">
                            <div className="input-group">
                                <textarea
                                    value={copyText}
                                    onChange={(e) => {
                                        const inputText = e.target.value;
                                        setCopyText(inputText);
                                        copyToClipboard(inputText)
                                    }}
                                    className="copy-content form-control"
                                    aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </ErrorBoundary>
    )
}
