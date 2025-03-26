import Hero from '@/components/website/hero/Hero'
import CardList from '@/components/website/cardlist/CardList'

const Integrations = () => {
  const cardsData = [
    {
      image: 'https://source.unsplash.com/300x200/?facebook',
      title: 'Facebook',
      description:
        'Send your ads or posts directly out onto your Facebook Pages.',
      link: '#',
    },
    {
      image: 'https://source.unsplash.com/300x200/?instagram',
      title: 'Instagram',
      description: 'Share your best moments and stories with your audience.',
      link: '#',
    },
    {
      image: 'https://source.unsplash.com/300x200/?twitter',
      title: 'Twitter',
      description: 'Engage with your followers in real-time conversations.',
      link: '#',
    },
    {
      image: 'https://source.unsplash.com/300x200/?linkedin',
      title: 'LinkedIn',
      description: 'Grow your professional network and career opportunities.',
      link: '#',
    },
    {
      image: 'https://source.unsplash.com/300x200/?youtube',
      title: 'YouTube',
      description: 'Create and share videos with the world.',
      link: '#',
    },
    // Baqi ke 26 cards bhi yahan add kar lo
  ]

  return (
    <>
      <Hero
        title="Integrations"
        description="Easily integrate social media accounts, ecommerce shops or schedulers within Ocoya, so you can create ads, posts and schedule them simultaneously."
        btn_primary="Start Scheduling"
        btn_secondary="Learn More"
        btn={false}
      />
      <CardList cards={cardsData} />
    </>
  )
}

export default Integrations
