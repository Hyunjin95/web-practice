import React from 'react';

interface IProps {
    isError: boolean,
    children: JSX.Element
}

const ErrorBoundary = (props: IProps) => {
    if (props.isError) {
        return <h1>Oops. That is not good</h1>;
    }
    else {
        return props.children;
    }
}

export default ErrorBoundary;