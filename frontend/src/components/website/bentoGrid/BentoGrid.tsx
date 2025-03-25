import { cn } from "@/lib/utils";
import React from "react";
// import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import bento1 from "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png";

export default function BentoGridComp() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          image={item.image}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    image:
      "../../../../public/featureNav/content/bentoGrid/6152eb36027ccce42986642e_Square Graphic Post 800x800 px-p-500.png",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    image:
      "../../../../public/featureNav/content/bentoGrid/63761d63e7b1c605857334a4_Screenshot_1-2-p-1600.png",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
