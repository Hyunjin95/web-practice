import React from 'react';
import Head from 'next/head';

interface Props {
  prefix: string;
  children: JSX.Element;
}

const Layout = ({ prefix, children }: Props): JSX.Element => (
  <>
    <Head>
      <title>RobotFriends</title>
      <link rel="icon" href={`${prefix}/favicon.ico`} />
    </Head>
    {children}
    <link rel="stylesheet" href={`${prefix}/static/index.css`} />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />
  </>
);

export default Layout;
