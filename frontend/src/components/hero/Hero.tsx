import { MarqueeComp } from "../marquee/MarqueeComp";

export function Hero() {
  return (
    <div className="bg-white text-black font-sans min-h-screen mt-18">
      {/* Hero Section */}
      <header className="flex flex-col justify-center text-center items-center px-6 py-24">
        <h1 className="text-5xl font-bold lg:text-8xl max-w-2xl sm:text-7xl tracking-wide">
          AI meets Social Media
        </h1>
        <p className="text-black text-lg max-w-xl mt-4">
          Schedule, optimize, and grow your online presence with AI-powered
          automation tools.
        </p>
        <button className="bg-black rounded-full text-lg text-white font-semibold hover:bg-gray-900 mt-6 px-6 py-3 transition">
          Get Started Free
        </button>
      </header>
      <MarqueeComp />
    </div>
  );
}
