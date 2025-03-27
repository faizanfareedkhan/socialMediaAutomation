import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from './../../../../../public/featureNav/content/copywritting/6441047bec5a656a66a0d8de_AI assistant for copywriting (1)-p-1600.png'
import HowAIWorks from '@/components/website/aiwritescopy/HowAIWorks'
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from './../../../../../public/featureNav/content/copywritting/643fbe9ea242051d32fc24c9_Try the AI Assistant (4)-p-500.png'

const CopyWriting = () => {
  return (
    <>
      <Hero
        title="AI-Powered Copywriting Assistant"
        description="Save hours with AI-powered copywriting—generate flawless marketing text in 28 languages. Just provide a description, and let AI do the rest!"
        btn_primary="Start Writing"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <HowAIWorks />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Try the AI Assistant!"
        description="Effortlessly generate ideas and repurpose content with the AI Assistant—just one click transforms your posts for maximum engagement. Watch your social media grow like never before!"
        reverse={true}
        btnText="Try Free"
        btn={true}
      />
    </>
  )
}

export default CopyWriting
