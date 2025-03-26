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
            Whether it's Ad Copy, Captions, Blogs, Emails, Website Content – we
            do it all. Select the task that is best for you.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3">
          <span className="text-6xl font-bold text-pink-500">2</span>
          <h3 className="text-xl font-bold mt-3">Describe your copy</h3>
          <p className="text-gray-600 mt-3 max-w-lg">
            Be as vague or specific as you like, The AI will adapt accordingly.
            You can also try describing the tone or target market for an Ad.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-2/3">
          <span className="text-6xl font-bold text-purple-500">3</span>
          <h3 className="text-xl font-bold mt-3">Generate text</h3>
          <p className="text-gray-600 mt-3 max-w-lg">
            Sit back and watch the AI do the work for you in seconds. You can
            generate unlimited copy in 28 languages to find the right result for
            you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowAIWorks
