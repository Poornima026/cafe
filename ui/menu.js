import Link from 'next/link';

const MenuPage = () => (
  <div>
    <h1>U&I - Choose Your Beverage</h1>
    <div>
      <Link href="/count?type=tea">
        <a>Tea</a>
      </Link>
      <Link href="/count?type=coffee">
        <a>Coffee</a>
      </Link>
      <Link href="/count?type=both">
        <a>Both</a>
      </Link>
    </div>
  </div>
);

export default MenuPage;
