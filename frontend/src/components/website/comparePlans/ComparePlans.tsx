import React from 'react'

const ComparePlans = () => {
  const plans = ['Bronze', 'Silver', 'Gold', 'Diamond']

  const pluginFeatures = [
    {
      label: 'Design templates',
      values: ['✖', 'Images', 'Images & videos', 'Images & videos'],
    },
    { label: 'All social media formats', values: ['✖', '✔', '✔', '✔'] },
    { label: 'Background remover', values: ['✖', '✔', '✔', '✔'] },
    { label: 'Format resizer', values: ['✖', '✔', '✔', '✔'] },
    { label: 'Brand kits', values: ['✖', '5', '20', 'Unlimited'] },
  ]

  const socialPublishingFeatures = [
    { label: 'Social channels', values: ['5', '20', '50', '150'] },
    { label: 'Schedule posts', values: ['✔', '✔', '✔', '✔'] },
    {
      label: 'Schedule video posts',
      values: [
        'Upload your own',
        'Video library',
        'Video library',
        'Video library',
      ],
    },
    { label: 'Schedule carousel posts', values: ['✔', '✔', '✔', '✔'] },
    {
      label: 'Posts in queue',
      values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
    },
    { label: 'AI best time to post', values: ['✖', '✖', '✔', '✔'] },
    { label: 'AI performance predictor', values: ['✖', '✖', '✔', '✔'] },
    { label: 'Duplicate posts', values: ['✔', '✔', '✔', '✔'] },
  ]

  const aiCopywriterFeatures = [
    {
      label: 'AI credits',
      values: ['100/mo', '500/mo', '1,500/mo', 'Unlimited'],
    },
    {
      label: 'AI templates',
      values: ['✖', 'Images', 'Images & videos', 'Images & videos'],
    },
    { label: 'AI templates count', values: ['50+', '50+', '50+', '50+'] },
    { label: 'Short-form writer', values: ['✔', '✔', '✔', '✔'] },
    { label: 'AI assistant', values: ['✔', '✔', '✔', '✔'] },
    { label: 'Languages', values: ['✖', '28+', '28+', '28+'] },
    { label: 'AI Caption', values: ['✖', '✔', '✔', '✔'] },
    { label: 'AI Art', values: ['✖', '✔', '✔', '✔'] },
    {
      label: 'Folders',
      values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center">Compare plans</h2>
      <p className="text-center text-gray-500 mb-6">
        Compare our plans and choose what suits your business the best.
      </p>

      {/* Table Component */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">🔌 Plugins</th>
              {plans.map((plan) => (
                <th key={plan} className="text-center font-bold p-4">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          {/* Plugin Features */}
          <tbody>
            {pluginFeatures.map((feature) => (
              <tr key={feature.label} className="border-b">
                <td className="text-left p-4">{feature.label}</td>
                {feature.values.map((value, index) => (
                  <td key={index} className="text-center p-4">
                    {value === '✔' ? (
                      <span className="text-green-500 text-lg">✔</span>
                    ) : value === '✖' ? (
                      <span className="text-gray-400 text-lg">✖</span>
                    ) : (
                      <span className="text-black font-medium">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Social Publishing Section */}
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">📅 Social Publishing</th>
              {plans.map((plan) => (
                <th key={plan} className="text-center font-bold p-4">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          {/* Social Publishing Features */}
          <tbody>
            {socialPublishingFeatures.map((feature) => (
              <tr key={feature.label} className="border-b">
                <td className="text-left p-4">{feature.label}</td>
                {feature.values.map((value, index) => (
                  <td key={index} className="text-center p-4">
                    {value === '✔' ? (
                      <span className="text-green-500 text-lg">✔</span>
                    ) : value === '✖' ? (
                      <span className="text-gray-400 text-lg">✖</span>
                    ) : (
                      <span className="text-black font-medium">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* AI Copywriter Section */}
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">⚙️ AI Copywriter</th>
              {plans.map((plan) => (
                <th key={plan} className="text-center font-bold p-4">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          {/* AI Copywriter Features */}
          <tbody>
            {aiCopywriterFeatures.map((feature) => (
              <tr key={feature.label} className="border-b">
                <td className="text-left p-4">{feature.label}</td>
                {feature.values.map((value, index) => (
                  <td key={index} className="text-center p-4">
                    {value === '✔' ? (
                      <span className="text-green-500 text-lg">✔</span>
                    ) : value === '✖' ? (
                      <span className="text-gray-400 text-lg">✖</span>
                    ) : (
                      <span className="text-black font-medium">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparePlans
