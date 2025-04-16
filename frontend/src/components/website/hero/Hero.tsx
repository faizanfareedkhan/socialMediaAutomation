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
    <div className="bg-primary text-secondary mt-18 max-h-screen min-h-max font-sans">
      {/* Hero Section */}
      <div className="absolute right-0">
        <div className="flex flex-col">
          <PopOver name={"hover me 1"} />
          <PopOver name={"hover me 2"} />
          <PopOver name={"hover me 3"} />
          <PopOver name={"hover me 4"} />
        </div>
      </div>
      <header className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-wide sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="bg-primary text-secondary mt-4 max-w-xl text-lg">
          {description}
        </p>
        {btn ? (
          <div className="mt-6 flex max-w-2xl flex-col items-center justify-center space-y-3 tracking-wide sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="border-secondary text-secondary hover:bg-secondary hover:text-primary h-[48px] w-[200px] cursor-pointer rounded-full border transition-colors duration-300">
              {btn_primary}
            </button>
            <button className="bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary border-secondary hover:border-tertiary h-[48px] w-[200px] cursor-pointer rounded-full border transition-colors duration-300">
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
