import React from 'react';
import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import MainPage from '../components/MainPage';

export interface IRobot {
    name: string,
    email: string,
    id: number
};

export interface IAppProps {
    robots: Array<IRobot>,
    isError: boolean
};

interface StatelessPage<P> extends React.FC<P> {
    getInitialProps?: () => Promise<P>
};

const Index: StatelessPage<IAppProps> = (props: IAppProps) => (
    <React.Fragment>
        <Head>
            <title>RobotFriends</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <MainPage { ...props } />
        <link rel="stylesheet" href="/static/index.css"/>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </React.Fragment>
);

Index.getInitialProps = async (): Promise<IAppProps> => {
    let isError = false;
    let robots: Array<IRobot> = [];

    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/users');
        robots = await req.json();  
    }
    catch (err) {
        isError = true;
    }
    finally {
        return {
            robots,
            isError
        };
    }
}

export default Index;
