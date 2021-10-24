import React from "react";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Clipboard() {
    return (
        <ErrorBoundary>
            <Layout>
                Clipboard
            </Layout>
        </ErrorBoundary>
    )
}