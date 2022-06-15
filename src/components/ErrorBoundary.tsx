import React, { ErrorInfo, ReactNode } from "react";

export interface IErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

const intialState: ErrorBoundaryState = {
    hasError: false
};

export class ErrorBoundary 
    extends React.Component<IErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = intialState;
    }

    static getDerivedStateFromError(_: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render(): React.ReactNode {
        
        if (this.state.hasError) {
            return <h1>Caught error (see console for details).</h1>;
        }

        return this.props.children; 
    }
}