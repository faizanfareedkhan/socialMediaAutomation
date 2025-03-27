import { FaVideo, FaBookmark, FaQuestionCircle } from 'react-icons/fa'

const cards = [
  {
    icon: <FaVideo size={24} />,
    title: 'Ocoya University',
    description: 'Your essential guide to everything Ocoya',
    authors: [
      {
        name: 'Author 1',
        img: '/featureNav/content/helpcenter/Profile_Picture-1623931754.png',
      },
    ],
    articles: 7,
    link: '#', // Replace with actual URL
  },
  {
    icon: <FaBookmark size={24} />,
    title: 'Help Articles',
    description: "Have an issue? You'll probably find the answer here",
    authors: [
      {
        name: 'Author 1',
        img: '/featureNav/content/helpcenter/Profile_Picture-1623931754.png',
      },
      {
        name: 'Author 2',
        img: '/featureNav/content/helpcenter/photo-1682068614.jpg',
      },
    ],
    articles: 102,
    link: '#', // Replace with actual URL
  },
  {
    icon: <FaQuestionCircle size={24} />,
    title: 'FAQ',
    description: 'Your essential guide to everything Ocoya',
    authors: [
      {
        name: 'Author 1',
        img: '/featureNav/content/helpcenter/Profile_Picture-1623931754.png',
      },
    ],
    articles: 20,
    link: '#', // Replace with actual URL
  },
]

export default function HelpCards() {
  return (
    <div className="flex gap-4 justify-center py-6">
      {cards.map((card, index) => (
        <a
          key={index}
          href={card.link}
          className="border rounded-lg p-6 shadow-md w-80 bg-white cursor-pointer hover:shadow-lg transition duration-300"
        >
          <div className="text-gray-600 mb-3">{card.icon}</div>
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-gray-500">{card.description}</p>
          <div className="flex items-center mt-4">
            {card.authors.map((author, i) => (
              <img
                key={i}
                src={author.img}
                alt={author.name}
                className="w-8 h-8 rounded-full border border-gray-300 -ml-2 first:ml-0"
              />
            ))}
            <p className="text-gray-500 text-sm ml-2">
              {card.authors.length} author{card.authors.length > 1 ? 's' : ''} •{' '}
              {card.articles} articles
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
