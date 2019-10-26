import React from 'react';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
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

export interface StatelessPage<P> extends React.FC<P> {
    getInitialProps?: () => Promise<P>
};

const Index: StatelessPage<IAppProps> = (props: IAppProps) => (
    <Layout>
        <MainPage { ...props } />
    </Layout>
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
