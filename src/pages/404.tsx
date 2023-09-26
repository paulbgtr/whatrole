import Link from "next/link";

const NotFound = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            Oops... The page you are looking for does not exist. <br />
            But don&apos;t worry, it&apos;s not lost forever! It&apos;s just
            taking a vacation in the Bermuda Triangle. 🏝️🌴
          </p>
          <Link href="/" className="btn btn-primary">
            Go to the Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
