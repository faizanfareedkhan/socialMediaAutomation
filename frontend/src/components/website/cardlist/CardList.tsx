import React from 'react'
import Card from '../card/Card'

const cardsData = [
  {
    image: './../../../../public/featureNav/content/integrations/6457ba215b3209f8ba141f5d_62521d10f53716755669c0e1_facebook.svg',
    title: 'Facebook',
    description:
      'Send your ads or posts directly out onto your Facebook Pages.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/64735fd68ad1475b688ab13e_62521d10f53716d3f269c0da_instagram.svg',
    title: 'Instagram',
    description: 'Post content directly onto Instagram Business profiles.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/64737092692659b947bb1244_62521d10f53716fc8c69c0db_twitter.svg',
    title: 'Twitter',
    description:
      'Come up with engaging and thought-provoking tweets that can also be split into thread',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/linkedin.svg',
    title: 'LinkedIn',
    description:
      'Generate business-related content for your LinkedIn Personal or LinkedIn Company pages.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/shopify.png',
    title: 'Shopify',
    description: 'Connect any store to select products you want to post about.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/tiktok.svg',
    title: 'TikTok',
    description:
      'Create short, entertaining videos with trending music and hashtags to reach a younger demographic.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/pinterest.svg',
    title: 'Pinterest',
    description:
      'Pin and organize content from your website or other sources onto boards to inspire and engage your audience.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/youtube.svg',
    title: 'YouTube',
    description:
      'Create and upload engaging video content that showcases your brand, product, or service.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/googlebusiness.png',
    title: 'Google Business Profile',
    description:
      'Create engaging posts to showcase your business on Google Maps and search results.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/woocommerse.png',
    title: 'WooCommerce',
    description:
      'Connect your personal store to select products you want to post about.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/etsy.svg',
    title: 'Etsy',
    description:
      'Connect your Etsy store to select products you want to post about on social media.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/bigcommerce.svg',
    title: 'Bigcommerce',
    description:
      'Connect your BigCommerce store to select products you want to post about on social media.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/ecwid.svg',
    title: 'Ecwid',
    description:
      'Connect your Ecwid store to select products you want to post about on social media.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/wix.svg',
    title: 'Wix Commerce',
    description:
      'Connect your Wix Commerce store to select products you want to post about on social media.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/canva.png',
    title: 'Canva',
    description:
      'Create beautiful designs with templates using your Free or Paid Canva account.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/grammarly.svg',
    title: 'Grammarly',
    description:
      'Ensure your captions are professional and error-free, allowing you to write with confidence and grow your social presence.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/airtable.svg',
    title: 'Airtable',
    description:
      'Organize your social content and schedule posts using Airtables customizable spreadsheets and templates.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/zapier.svg',
    title: 'Zapier',
    description:
      'Automate your marketing by integrating with Zapier and connect with over 5,000+ apps.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/make.svg',
    title: 'Make',
    description:
      'Create and share engaging visual content for your social media channels using Makes design tool and templates.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/adobe.svg',
    title: 'Adobe Express',
    description:
      'Create stunning visual content with Adobes design software and integrate directly with your social media channels.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/unsplash.svg',
    title: 'Unsplash',
    description:
      'Discover and use high-quality, free images for your social media posts with Unsplashs vast library of photography.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/giphy.svg',
    title: 'Giphy',
    description:
      'Create and share GIFs on your social media channels to add some fun and personality to your posts on!',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/pexels.svg',
    title: 'Pexels',
    description:
      'Find and use high-quality, free stock photos and videos for your social media posts with Pexels library.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/pixabay.svg',
    title: 'Pixabay',
    description:
      'Discover and use free stock photos, illustrations, and vectors for your social media posts with Pixabays library.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/dropbox.svg',
    title: 'Dropbox',
    description:
      'Store and share your social media content with Dropboxs cloud storage and collaboration tools.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/googledrive.svg',
    title: 'Google Drive',
    description:
      'Store and share your social media content with Google Drives cloud storage and collaboration tools.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/box.svg',
    title: 'Box',
    description:
      'Store and share your social media content with Boxs cloud storage and collaboration tools.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/slack.svg',
    title: 'Slack',
    description:
      'Collaborate with your team and share social media content seamlessly with Slacks messaging and collaboration platform.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/whatsapp.svg',
    title: 'WhatsApp',
    description:
      'Connect with your audience through private and secure messaging via your WhatsApp account with Ocoya.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/telegram.svg',
    title: 'Telegram',
    description:
      'Create engaging content and share it with your audience through private messaging via your Telegram account.',
    link: '#',
  },
  {
    image: './../../../../public/featureNav/content/integrations/snapchat.svg',
    title: 'Snapchat',
    description: 'Create visually appealing content to engage your younger demographic audience on Snapchat.',
    link: '#',
  },

]

const CardList = () => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}

export default CardList
