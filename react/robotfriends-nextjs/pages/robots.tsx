import React from 'react';
import Link from "next/link";
import fetch from "isomorphic-fetch";
import Layout from "../components/Layout";
import ErrorBoundary from '../components/ErrorBoundary';
import { IRobot } from './index';

interface IRobotProps {
    robot: IRobot,
    isError: boolean
};

interface IContext {
    query: {
        id: number
    }
};

interface StatelessPage<P> extends React.FC<P> {
    getInitialProps?: (context: IContext) => Promise<P>
};

const Robots: StatelessPage<IRobotProps> = (props: IRobotProps) => {
    return (
        <Layout>
            <React.Fragment>
                <ErrorBoundary isError={props.isError}>
                    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                        <img alt="_robots_" src={`https://robohash.org/${props.robot.id}?size=200x200`}/>
                        <div>
                            <h2>{props.robot.name}</h2>
                            <p>{props.robot.email}</p>
                        </div>
                    </div>
                </ErrorBoundary>
                <Link href='/'>
                    <button className='tc'>Back</button>
                </Link>
            </React.Fragment>
        </Layout>
    );
}

Robots.getInitialProps = async (context: IContext): Promise<IRobotProps> => {
    const { id } = context.query;

    let isError = false;
    let robot: IRobot = {
        email: 'abc@abc.com',
        id: 1,
        name: 'abc'
    };

    try {
        const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        robot = await req.json();  
    }
    catch (err) {
        isError = true;
    }
    finally {
        return {
            robot,
            isError
        };
    }
};

export default Robots;
