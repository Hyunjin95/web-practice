import React from 'react';
import Head from 'next/head';

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Head>
      <title>RobotFriends</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
    <link rel="stylesheet" href="/static/index.css" />
    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />
  </>
);

export default Layout;
