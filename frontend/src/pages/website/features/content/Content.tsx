import Hero from "@/components/website/hero/Hero";
import imageForLandingPage from "../../../../../public/content/63e784a01eb4adb38ad0c238_63ca6200cf5374311c5a5c01_Content_2_1 (1)-p-1080.png";
import imageSplitSection from "../../../../../public/featureNav/content/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png";

import SplitSection from "@/components/website/splitSection/SplitSection";
import BentoGridComp from "@/components/website/bentoGrid/BentoGrid";

const Content = () => {
  return (
    <>
      <Hero
        title="Eye-popping content in minutes"
        description="Become a professional graphics designer and copywriter today. Create engaging images, video, text and hashtags in no time at all."
        btn_primary="Start Creating"
        btn_secondary="Learn More"
        image={imageForLandingPage}
        btn={true}
      />
      <BentoGridComp />
      <SplitSection
        imageSrc={imageSplitSection}
        title="Text & captions"
        description="All it takes is just a simple description, which will generate multiple high converting captions to choose from. Ecommerce store? We have a dedicated Product Announcements feature. You will also generate relevant and trending hashtags too!"
        reverse={true}
      />
    </>
  );
};

export default Content;
