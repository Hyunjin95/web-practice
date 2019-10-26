import Link from 'next/link';
import Image from '../components/Image';

const About = () => (
    <React.Fragment style={{ fontSize: '20px', color: 'blue' }}>
        <h1>About</h1>
        <Link href='/'>
            <button>Back</button>
        </Link>
        <Image />
        <p>Hello, world!</p>
    </React.Fragment>
);

export default About;