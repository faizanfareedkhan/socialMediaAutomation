import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from "./../../../../../public/featureNav/content/automation/647db210aba6da4069c41650_RSS-p-1600.png"
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from "./../../../../../public/featureNav/content/automation/647db221e31045668fee60a0_Hands off with RSS AI posting.png"
const Automation = () => {
  return (
    <>
      <Hero
        title="Automate Social Media with AI"
        description="Automate repetitive tasks and save time with Ocoya's AI-powered social media automation. Level-up your social media with RSS posting, actions links and much more"
        btn_primary="Try Now"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Hands off with RSS AI posting"
        description="Transform your social media game with automated RSS posting. Our cutting-edge technology generates optimized posts from your RSS feeds with AI, including your captions, images and hashtags. Maximize social media impact without sacrificing time or resources."
        reverse={true}
      />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Bulk publishing with Action Links and AI"
        description="Schedule your content in advance, automate post actions with One-Click Post Triggers, and quickly create captions using our AI prompt feature. Engage effortlessly with your audience and grow your following without lifting a finger. Connect with your go-to automation tool today."
        reverse={false}
      />
    </>
  )
}

export default Automation