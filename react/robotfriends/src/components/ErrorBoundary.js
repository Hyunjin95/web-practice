import React from 'react';

const ErrorBoundary = (props) => {
    if (props.isError) {
        return <h1>Oops. That is not good</h1>;
    }
    else {
        return props.children;
    }
}

export default ErrorBoundary;