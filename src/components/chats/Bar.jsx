import React from "react";
import { Chart } from "react-charts";
import { ErrorBoundary } from "../../utils/ErrorBoundary";
import ResizableBox from "../../utils/ResizableBox";


export default function Bar({ data }) {


    const primaryAxis = React.useMemo(
        () => ({
            getValue: (datum) => datum.primary,
        }),
        []
    );

    const secondaryAxes = React.useMemo(
        () => [
            {
                getValue: (datum) => datum.secondary,
            },
        ],
        []
    );

    return (
        <ErrorBoundary>{data && data.length > 0 && <ResizableBox>
            <Chart
                options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                }}
            />
        </ResizableBox>}
        </ErrorBoundary>
    );
}
