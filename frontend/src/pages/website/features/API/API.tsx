import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from "./../../../../../public/featureNav/content/api/645a9abfee0f59018e62798a_API_grey-p-2000.png"
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from "./../../../../../public/featureNav/content/api/64824f5f6b22f174f6977a63_Create and publish posts-min.png"
import generateAI from './../../../../../public/featureNav/content/api/64824f1169a0fcdd714fcb66_Generate AI copy.png'
const API = () => {
  return (
    <>
      <Hero
        title="Powerful & Comprehensive Social Media API"
        description="Optimize your social media workflow with our all-in-one API—seamlessly connect and manage multiple platforms with ease."
        btn_primary="Try Now"
        btn_secondary="Docs"
        image={imageForLandingPage}
        btn={true}
      />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Create and publish posts"
        description="Effortlessly create and publish posts across all social media platforms with Ocoya's API. Integrate seamless post creation into your apps or website and streamline content sharing like never before."
        reverse={true}
      />
      <SplitSection
        imageSrc={generateAI}
        title="Generate AI copy"
        description="Create high-quality, engaging content effortlessly with AI. Generate copy for websites, social media, emails, and more—no copywriting experience needed. Available in 28+ languages!"
        reverse={false}
      />
    </>
  )
}

export default API