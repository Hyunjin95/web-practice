import Link from 'next/link';
import { IRobot } from '../pages/index';

const Card: React.FC<IRobot> = (props) => {
    const { name, email, id } = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <Link href={`/robots?id=${id}`} as={`/robots/${id}`}>
                <a className='no-underline'>
                    <img alt="_robots_" src={`https://robohash.org/${id}?size=200x200`}/>
                    <div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default Card;