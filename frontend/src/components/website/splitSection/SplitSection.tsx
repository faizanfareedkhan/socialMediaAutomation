import React from 'react'

interface SplitSectionProps {
  imageSrc: string
  title: string
  description: string
  reverse: boolean
}

const SplitSection: React.FC<SplitSectionProps> = ({
  imageSrc,
  title,
  description,
  reverse,
}) => {
  return (
    <section className="w-full bg-white text-black py-12 px-6 container mx-auto flex justify-center items-center">
      <div
        className={`flex flex-col ${
          reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
        } items-center gap-6 md:gap-12 px-12 md:px-20 lg:px-32`}
      >
        {/* Image Section (Bigger Image) */}
        <div className="w-4/5 md:w-1/2 lg:w-2/5 h-auto">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{description}</p>
          <button className="bg-black rounded-full mt-4 text-lg text-white font-semibold hover:bg-gray-900 w-full sm:w-auto px-6 py-3 transition">
            {'Try Free'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default SplitSection
