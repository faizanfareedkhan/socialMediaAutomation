import Hero from '@/components/website/hero/Hero'
import SplitSection from '@/components/website/splitSection/SplitSection'
import ComparePlans from '@/components/website/comparePlans/ComparePlans'

function Pricing() {
  return (
    <>
      <Hero
        title="Pricing"
        description="We offer plans for every business—whether you're a solopreneur or a marketing agency, we’ve got you covered."
        btn_primary="Annually"
        btn_secondary="Monthly"
        btn={true}
      />

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg w-80 h-[800px] flex flex-col justify-between text-center border ${plan.highlighted ? 'bg-gray-900 text-white' : 'bg-white'} `}
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-gray-500 text-sm">{plan.subtitle}</p>
            <p className="text-3xl font-bold mt-4">${plan.price}</p>
            <p className="text-gray-500 text-sm">per month</p>
            <button
              className={`mt-4 px-6 py-2 rounded-lg cursor-pointer font-semibold ${plan.highlighted ? 'bg-gray-700 text-white' : 'border border-gray-900'}`}
            >
              Try free
            </button>
            <ul className="mt-6 text-left text-sm space-y-2 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="border-t pt-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-500">Supported</p>
              <img
                src="/featureNav/content/pricing/6164ffd667f47b2a3684e934_supported_channels_more.png"
                alt="Supported Social Media"
                className="mx-auto mt-2 w-40"
              />
            </div>
          </div>
        ))}
      </div>

      <SplitSection
        imageSrc="/featureNav/content/pricing/60d0d51b62241f54d923edd8_toa-heftiba-4xe-yVFJCvw-unsplash-p-800.jpeg"
        title="Want more?"
        description="For large businesses with unique needs—customize your number of profiles and users. Visit our enterprise page below to book a call and explore tailored solutions."
        reverse={true}
        btnText="Talk to sales"
        btn={true}
      />
      <ComparePlans />
    </>
  )
}

const pricingPlans = [
  {
    title: 'Bronze',
    subtitle: 'For individuals.',
    price: 15,
    highlighted: false,
    features: [
      '5 social profiles',
      '1 member',
      '1 workspace',
      '100 AI credits',
    ],
  },
  {
    title: 'Silver',
    subtitle: 'For growing teams.',
    price: 39,
    highlighted: false,
    features: [
      '20 social profiles',
      '5 team members',
      '5 workspaces',
      '500 AI credits',
      'Copywriting in 28+ languages',
      'Plugins inside post editor',
      'Everything from Bronze',
    ],
  },
  {
    title: 'Gold',
    subtitle: 'For scaling businesses.',
    price: 79,
    highlighted: true,
    features: [
      '50 social profiles',
      '20 team members',
      '20 workspaces',
      '1,500 AI credits',
      'Automations',
      'Everything from Silver',
    ],
  },
  {
    title: 'Diamond',
    subtitle: 'For large organizations.',
    price: 159,
    highlighted: false,
    features: [
      '150 social profiles',
      '50 team members',
      'Unlimited workspaces',
      'Unlimited AI credits',
      'Advanced analytics',
      'Branded reports',
      'Everything from Gold',
    ],
  },
]

export default Pricing
