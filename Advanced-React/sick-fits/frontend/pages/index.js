import Link from 'next/link'

export default props => {
    return (
      <div>
        <p>Hello Home!</p>
        <Link href='/sell'>
        <a>Sell!</a>
        </Link>
      </div>
    );
  };
  