interface HeroProps {
  title: string
  description: string
  btn_primary: string
  btn_secondary: string
  image: string
  btn: boolean
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
    <div className="bg-white text-black font-sans  min-h-max  max-h-screen mt-18">
      {/* Hero Section */}
      <header className="flex flex-col justify-center text-center items-center px-6 py-24">
        <h1 className="text-5xl font-bold lg:text-8xl max-w-2xl sm:text-7xl tracking-wide">
          {title}
        </h1>
        <p className="text-black text-lg max-w-xl mt-4">{description}</p>
        {btn ? (
          <div className="flex flex-col sm:flex-row items-center justify-center max-w-2xl tracking-wide space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="bg-black cursor-pointer rounded-full text-lg text-white font-semibold hover:bg-gray-900 w-full sm:w-auto px-6 py-3 transition">
              {btn_primary}
            </button>
            <button className="border cursor-pointer border-black rounded-full text-lg text-black font-semibold hover:bg-gray-100 w-full sm:w-auto px-6 py-3 transition">
              {btn_secondary}
            </button>
          </div>
        ) : (
          ''
        )}
      </header>
      <img
        src={image}
        alt=""
        className="w-full max-w-4xl mx-auto h-auto object-cover"
      />
    </div>
  )
}
