import React from 'react'

const HowAIWorks: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 text-center ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        How the AI writes your Copy
      </h2>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3">
          <span className="text-6xl font-bold text-orange-500">1</span>
          <h3 className="text-xl font-bold mt-3">Choose your Task</h3>
          <p className="text-gray-600 mt-3 max-w-lg">
            From ad copy and captions to blogs, emails, and website content—we
            do it all. Just pick the task that suits your needs!
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3">
          <span className="text-6xl font-bold text-pink-500">2</span>
          <h3 className="text-xl font-bold mt-3">Describe your copy</h3>
          <p className="text-gray-600 mt-3 max-w-lg">
            Be as vague or specific as you want—AI adapts to your needs. Define
            the tone or target audience for a perfect ad.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3">
          <span className="text-6xl font-bold text-purple-500">3</span>
          <h3 className="text-xl font-bold mt-3">Generate text</h3>
          <p className="text-gray-600 mt-3 max-w-lg">
            Sit back and let AI do the work in seconds. Generate unlimited copy
            in 28 languages to find the perfect fit for your needs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowAIWorks
