import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from "./../../../../../public/featureNav/content/ai-assist/64ad200a0ac6c9030b22bc99_AI Assist-min-p-1600.png"
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from "./../../../../../public/featureNav/content/ai-assist/643fbe9ea242051d32fc24c9_Try the AI Assistant (4)-p-1080.png"
const AIAssist = () => {
  return (
    <>
      <Hero
        title="Transforming social media with AI"
        description="Elevate your content game with AI-Powered social media management. Create high-converting copy and eye-popping images with ease."
        btn_primary="Try Now"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Your social media assistant"
        description="Boost your social media engagement and growth with the AI Assistant. Generate ideas and repurpose existing content with ease and efficiency. Get more out of your social media efforts and unleash the full potential of your brand. Discover the power of AI today!"
        reverse={true}
      />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Your social media assistant"
        description="Boost your social media engagement and growth with the AI Assistant. Generate ideas and repurpose existing content with ease and efficiency. Get more out of your social media efforts and unleash the full potential of your brand. Discover the power of AI today!"
        reverse={false}
      />
    </>
  )
}

export default AIAssist