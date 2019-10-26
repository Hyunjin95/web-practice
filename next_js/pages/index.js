import Link from 'next/link';

const Index = () => (
  <React.Fragment>
      <h1>SSR Magician</h1>
      <Link href='/about'>
        <button>About</button>
      </Link>
      <Link href='/robots'>
        <button>robots</button>
      </Link>
      {/* <a href='./about'>About</a> */}
  </React.Fragment>
);

export default Index;