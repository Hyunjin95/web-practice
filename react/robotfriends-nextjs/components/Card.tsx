import Link from 'next/link';
import { Robot } from '../pages/index';

const Card: React.FC<Robot> = (props: Robot) => {
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <Link href={`/robots?id=${id}`} as={`robots/${id}`}>
        <button className="no-underline" type="button">
          <img alt="_robots_" src={`https://robohash.org/${id}?size=200x200`} />
          <div>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Card;
