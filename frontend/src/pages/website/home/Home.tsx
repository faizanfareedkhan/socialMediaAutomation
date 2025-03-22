import TabsComp from "@/components/website/features/Features";
import { Hero } from "@/components/website/hero/Hero";
import ThreeDMarqueeComp from "@/components/website/integrations/Integrations";
import MarketingPrompt from "@/components/website/marketingPrompt/MarketingPrompt";
import FeaturesSectionComp from "@/components/website/roiMarketing/ROIMarketing";

const Home = () => {
  return (
    <>
      <Hero />
      <TabsComp />
      <ThreeDMarqueeComp />
      <MarketingPrompt />
      <FeaturesSectionComp />
    </>
  );
};

export default Home;
