import React from "react";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Home() {
    return (
        <ErrorBoundary>
            <Layout>
                Home
            </Layout>
        </ErrorBoundary>
    )
}