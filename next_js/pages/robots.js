import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
    return (
        <React.Fragment>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div>
                {
                    props.robots.map(robot => (
                        <li key={robot.id}>
                            <Link href={`robots/${robot.id}`}>
                                <a>{robot.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </div>
        </React.Fragment>
    );
};

Robots.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        robots: data
    }
};

export default Robots;