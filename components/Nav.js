import Link from 'next/link';
const Nav = () => (
  <div>
    <Link href="/plans">
      <a>My Plans</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;
