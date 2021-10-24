import React from "react";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Clipboard() {
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
                                <textarea className="copy-content form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </ErrorBoundary>
    )
}