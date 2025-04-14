interface HeroProps {
  title: string;
  description: string;
  btn_primary?: string;
  btn_secondary?: string;
  image?: string;
  btn?: boolean;
}

export default function Hero({
  title,
  description,
  btn_primary,
  btn_secondary,
  image,
  btn,
}: HeroProps) {
  return (
    <div className="mt-18 max-h-screen min-h-max font-sans text-black">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-wide sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-black">{description}</p>
        {btn ? (
          <div className="mt-6 flex max-w-2xl flex-col items-center justify-center space-y-3 tracking-wide sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="w-full cursor-pointer rounded-full bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-900 sm:w-auto">
              {btn_primary}
            </button>
            <button className="w-full cursor-pointer rounded-full border border-black px-6 py-3 text-lg font-semibold text-black transition hover:bg-gray-100 sm:w-auto">
              {btn_secondary}
            </button>
          </div>
        ) : (
          ""
        )}
      </header>
      <img
        src={image}
        alt=""
        className="mx-auto h-auto w-full max-w-4xl object-cover"
      />
    </div>
  );
}
