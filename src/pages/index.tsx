import Link from "next/link";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">What Role?! 🤖</h1>
          <div className="py-6">
            <p>
              Do currently have a project where you ask that question to
              yourself?
            </p>
            <p className="mt-1">Our AI-powered quiz can help you with that!</p>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/quiz" className="btn btn-primary">
              Start
            </Link>
            <Link
              href="https://github.com/paulbgtr/whatrole"
              className="btn btn-primary"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
