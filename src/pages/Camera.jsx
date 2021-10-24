import React from "react";
import Layout from "../layout/Layout";
import { ErrorBoundary } from "../utils/ErrorBoundary";

export default function Camera() {
    return (
        <ErrorBoundary>
            <Layout>
                Camera
            </Layout>
        </ErrorBoundary>
    )
}