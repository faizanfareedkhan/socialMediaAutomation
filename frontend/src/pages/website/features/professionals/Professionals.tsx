import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from "./../../../../../public/featureNav/content/professionals/668c0b1dca846295ae54e7be_Hire a professional green (1).png"
import HowAIWorks from '@/components/website/aiwritescopy/HowAIWorks'
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from "./../../../../../public/featureNav/content/professionals/6687bc77ced3e96b1d068204_Expertise and reliability.png"
import achieve from "./../../../../../public/featureNav/content/professionals/6687bc94a5f0c5bb4c48960a_Achieve real results.png"
const Professionals = () => {
  return (
    <>
      <Hero
        title="Find and hire a professional with ease."
        description="We've partnered with Upwork to connect you with skilled social media experts directly on Ocoya. Get matched with a professional to help you achieve your goals effortlessly."
        btn_primary="Hire Now"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <HowAIWorks />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Expertise & reliability."
        description="Our Upwork partnership ensures you find expert freelancers ready to elevate your social media presence."
        reverse={true}
      />
      <SplitSection
        imageSrc={achieve}
        title="Achieve real results."
        description="Join thousands of satisfied clients who have elevated their social media presence with Ocoya and Upwork. Experience increased engagement, follower growth, and enhanced brand visibility with our tailored social media solutions."
        reverse={false}
      />
    </>
  )
}

export default Professionals