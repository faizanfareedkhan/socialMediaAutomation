import Hero from '@/components/website/hero/Hero'
import SplitSection from '@/components/website/splitSection/SplitSection'
import ThreeColumnSection from '@/components/website/threeColumnSection/ThreeColumnSection'
import imageSplitSection from "./../../../../public/featureNav/content/getpaid/643fe8fecb809e1c8a3e2e33_How does it work.png"
import partner from "./../../../../public/featureNav/content/getpaid/643fe96730b466666d57a9b7_Who can become our Partner.png"
import FAQ from '@/components/website/faq/Faq'

function GetPaid() {
  return (
    <>
      <Hero
        title="Earn with Our 30% Affiliate Program"
        description="Earn 30% recurring commission on every referral! Plus, your referrals get an automatic 20% discount at checkout."
        btn_primary="Start earning"
        btn_secondary="Learn more"
        btn={true}
      />
      <ThreeColumnSection />
      <SplitSection
        imageSrc={imageSplitSection}
        title="How does it work?"
        description="Our partnership program is a results-driven collaboration, where Ocoya Partners bring in new users and earn recurring revenue from subscription payments."
        reverse={true}
        btnText="Talk to sales"
        btn={false}
      />
      <SplitSection
        imageSrc={partner}
        title="Who can become our Partner?"
        description="AMarketing agencies, bloggers, influencers, and industry experts—join us! Leverage your experience to introduce your audience to Ocoya’s powerful content marketing solution and earn rewards."
        reverse={false}
        btnText="Talk to sales"
        btn={false}
      />
      <Hero
        title="Press Kit"
        description="Access all our branded assets, including logos and Ocoya platform screenshots. Explore our 'How to Use' guide to maximize their impact."
        btn_primary="Assets"
        btn_secondary="How to use"
        btn={true}
      />
      <FAQ />
    </>
  )
}

export default GetPaid
