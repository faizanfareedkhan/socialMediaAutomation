import { Hero } from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import SignUp from "./pages/auth/SignUp";
// import SignIn from "./pages/auth/SignIn";
import TabsComp from "./components/features/Features";
import ThreeDMarqueeComp from "./components/integrations/Integrations";
import MarketingPrompt from "./components/marketingPrompt/MarketingPrompt";
import FeaturesSectionComp from "./components/roiMarketing/ROIMarketing";
// import { ThemeProvider } from "./providers/theme/ThemeProviders";

const App = () => {
  return (
    <>
      {/* <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> */}
      <Navbar />
      <Hero />
      <TabsComp />
      <ThreeDMarqueeComp />
      <MarketingPrompt />
      <FeaturesSectionComp />
      {/* <SignUp />
      <SignIn /> */}
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
