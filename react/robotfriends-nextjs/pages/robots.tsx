import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import ErrorBoundary from '../components/ErrorBoundary';
import { Robot, prefix } from './index';

interface RobotProps {
  robot: Robot;
  isError: boolean;
}

interface Context {
  query: {
    id: number;
  };
}

interface StatelessPage<P> extends React.FC<P> {
  getInitialProps?: (context: Context) => Promise<P>;
}

const Robots: StatelessPage<RobotProps> = ({
  isError = false,
  robot,
}: RobotProps) => {
  const pf = process.env.NODE_ENV === 'production' ? '/web-practice' : "/";

  return (
    <Layout prefix={prefix}>
      <>
        <ErrorBoundary isError={isError}>
          <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img
              alt="_robots_"
              src={`https://robohash.org/${robot.id}?size=200x200`}
            />
            <div>
              <h2>{robot.name}</h2>
              <p>{robot.email}</p>
            </div>
          </div>
        </ErrorBoundary>
        <Link href={pf}>
          <button type="button" className="tc">
            Back
          </button>
        </Link>
      </>
    </Layout>
  );
};

Robots.getInitialProps = async (context: Context): Promise<RobotProps> => {
  const { id } = context.query;

  let isError = false;
  let robot: Robot = {
    email: 'abc@abc.com',
    id: 1,
    name: 'abc',
  };

  try {
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    robot = await req.json();
  } catch (err) {
    isError = true;
  }

  return {
    robot,
    isError,
  };
};

export default Robots;
