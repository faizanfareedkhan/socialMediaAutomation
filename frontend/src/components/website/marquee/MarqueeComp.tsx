import { cn } from '@/lib/utils'
import { Marquee } from '../../magicui/marquee'

const reviews = [
  {
    img: '/marquee/1.svg',
  },
  {
    img: '/marquee/2.svg',
  },
  {
    img: '/marquee/3.png',
  },
  {
    img: '/marquee/4.svg',
  },
  {
    img: '/marquee/5.svg',
  },
]

const firstRow = reviews.slice(0, reviews.length)

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        'relative w-64 p-4 rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white',
        'dark:border-gray-700 dark:bg-gray-900 flex justify-center items-center'
      )}
    >
      <img className="w-full object-cover" src={img} alt="Profile" />
      <div className="flex bg-black/30 justify-center absolute backdrop-blur-sm hover:opacity-100 inset-0 items-center opacity-0 transition-opacity">
        <p className="text-lg text-white font-medium">View Profile</p>
      </div>
    </div>
  )
}

export function MarqueeComp() {
  return (
    <div className="flex flex-col justify-center w-full items-center overflow-hidden relative">
      <div className="text-black text-lg max-w-xl mt-4">
        These companies rely on us for their content
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>

      <div className="bg-gradient-to-r w-1/4 absolute from-background inset-y-0 left-0 pointer-events-none"></div>
      <div className="bg-gradient-to-l w-1/4 absolute from-background inset-y-0 pointer-events-none right-0"></div>
    </div>
  )
}
