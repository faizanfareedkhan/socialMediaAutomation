import PopOver from "../popOver/PopOver";

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
    <div className="bg-base text-contrast mt-18 max-h-screen min-h-max font-sans">
      {/* Hero Section */}
      <div className="absolute right-0">
        <div className="mt-8 mr-10 flex flex-col gap-1">
          <PopOver color="bg-red-500" />
          <PopOver color="bg-green-500" />
          <PopOver color="bg-blue-500" />
        </div>
      </div>
      <header className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-wide sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="bg-base text-contrast mt-4 max-w-xl text-lg">
          {description}
        </p>
        {btn ? (
          <div className="mt-6 flex max-w-2xl flex-col items-center justify-center space-y-3 tracking-wide sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="border-contrast text-contrast hover:bg-contrast h-[48px] w-[200px] cursor-pointer rounded-full border transition-colors duration-300 hover:text-base">
              {btn_primary}
            </button>
            <button className="bg-accent text-contrast hover:bg-contrast hover:text-accent border-contrast hover:border-accent h-[48px] w-[200px] cursor-pointer rounded-full border transition-colors duration-300">
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
