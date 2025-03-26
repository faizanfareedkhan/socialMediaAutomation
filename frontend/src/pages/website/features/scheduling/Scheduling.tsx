import Hero from '@/components/website/hero/Hero'
import imageForLandingPage from "./../../../../../public/featureNav/content/scheduling/63d17e914a9eb652218eda1d_Screenshot_Calendar (3)-p-1600.png"
import ThreeColumnGrid from '@/components/website/threecolumngrid/ThreeColumnGrid'
import SplitSection from '@/components/website/splitSection/SplitSection'
import imageSplitSection from "./../../../../../public/featureNav/content/scheduling/64425f0b27bb491c533f103b_Schedule for years upfront-p-2000.png"
const Scheduling = () => {
  return (
    <>
      <Hero
        title="Schedule to all social platforms"
        description="Use the most reliable scheduler in the world. Schedule up to 1,000 posts a minute on Facebook, Instagram, Twitter and LinkedIn."
        btn_primary="Start Scheduling"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <ThreeColumnGrid />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Schedule for years upfront"
        description="Post or schedule directly to Facebook, Instagram, Twitter and LinkedIn all in one dashboard. See all your past and future posts in one place with a calendar."
        reverse={true}
        
      />
    </>
  )
}

export default Scheduling
