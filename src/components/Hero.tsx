import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="px-4 py-4 sm:px-6 lg:py-6">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
             compare them side by side, and build the perfect technology
              stack for your next project.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white">
              Explore Technologies
            </button>

            <button className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Developer technology stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}