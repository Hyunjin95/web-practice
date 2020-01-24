import React from 'react';

interface Props {
  isError: boolean;
  children: JSX.Element;
}

const ErrorBoundary = (props: Props): JSX.Element => {
  const { isError, children } = props;

  if (isError) {
    return <h1>Oops. That is not good</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;
