import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from './../../../../../public/featureNav/content/ecommerse/6454c54134861df889b19afe_Ecommerce-2-p-1600.png'
import HowAIWorks from '@/components/website/aiwritescopy/HowAIWorks'
const Ecommerce = () => {
  const stepsData = [
    {
      number: '1',
      title: 'Choose your Task',
      description:
        "Whether it's Ad Copy, Captions, Blogs, Emails, Website Content – we do it all. Select the task that is best for you.",
      color: 'text-orange-500',
    },
    {
      number: '2',
      title: 'Describe your copy',
      description:
        'Be as vague or specific as you like, The AI will adapt accordingly. You can also try describing the tone or target market for an Ad.',
      color: 'text-pink-500',
    },
    {
      number: '3',
      title: 'Generate text',
      description:
        'Sit back and watch the AI do the work for you in seconds. You can generate unlimited copy in 28 languages to find the right result for you.',
      color: 'text-purple-500',
    },
  ]
  return (
    <>
      <Hero
        title="Let your Ecommerce become Social"
        description="Tired of manually creating posts around your products?Increase conversions for your ecommerce store by visually planning your campaigns."
        btn_primary="Start Creating"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <HowAIWorks />
    </>
  )
}

export default Ecommerce
