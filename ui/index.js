import Link from 'next/link';

const IndexPage = () => (
  <div>
    <h1>Welcome to U&I Cafe</h1>
    <img src="/shop-image.jpg" alt="Shop Image" />
    <Link href="/menu">
      <a>Next</a>
    </Link>
  </div>
);

export default IndexPage;
