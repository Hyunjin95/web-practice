import React from 'react';
import Head from 'next/head';

type Props = {
    children?: JSX.Element
};

const Layout = (props: Props) => (
    <React.Fragment>
        <Head>
            <title>RobotFriends</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        {props.children}
        <link rel="stylesheet" href="/static/index.css"/>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </React.Fragment>
);

export default Layout;