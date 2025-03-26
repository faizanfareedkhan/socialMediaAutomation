import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from './../../../../../public/featureNav/content/copywritting/6441047bec5a656a66a0d8de_AI assistant for copywriting (1)-p-1600.png'
import HowAIWorks from '@/components/website/aiwritescopy/HowAIWorks'
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from './../../../../../public/featureNav/content/copywritting/643fbe9ea242051d32fc24c9_Try the AI Assistant (4)-p-500.png'

const CopyWriting = () => {
  return (
    <>
      <Hero
        title="AI assistant for copywriting"
        description="Save hours on writing flawless copy and generate text for all your marketing needs in 28 languages. Simply provide a description and the copywriter will do the rest!"
        btn_primary="Start Writing"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <HowAIWorks />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Try the AI Assistant!"
        description="With the AI Assistant, you can easily generate ideas and repurpose your existing content multiple times with just a click. This can significantly enhance your engagement on all social media platforms and assist in your growth. You'll be amazed at what the AI Assistant can do!"
        reverse={true}
      />
    </>
  )
}

export default CopyWriting
