import { cn } from "@/lib/utils";

import {
  IconBrush, // Graphics - Awesome templates for your images.
  IconRobot, // AI Copywriting - Generated marketing text, powered by AI.
  IconCalendarTime, // Scheduling - Automatic on all socials.
  IconChartBar, // Analytics - Real-time metrics on performance.
  IconHash, // Hashtags - Relevant & trending, freshly updated.
  IconShoppingBag, // Ecommerce - Announce about new products.
  IconLink, // Link Shortener - Save space on long links in captions.
  IconUsers, // Collaboration - Create workspaces for members.
} from "@tabler/icons-react";

export default function FeaturesSectionComp() {
  const features = [
    {
      title: "Graphics",
      description: "Awesome templates for your images.",
      icon: <IconBrush />,
    },
    {
      title: "AI Copywriting",
      description: "Generated marketing text, powered by AI.",
      icon: <IconRobot />,
    },
    {
      title: "Scheduling",
      description: "Automatic on all socials.",
      icon: <IconCalendarTime />,
    },
    {
      title: "Analytics",
      description: "Real-time metrics on performance.",
      icon: <IconChartBar />,
    },
    {
      title: "Hashtags",
      description: "Relevant & trending, freshly updated.",
      icon: <IconHash />,
    },
    {
      title: "Ecommerce",
      description: "Announce about new products.",
      icon: <IconShoppingBag />,
    },
    {
      title: "Link Shortener",
      description: "Save space on long links in captions.",
      icon: <IconLink />,
    },
    {
      title: "Collaboration",
      description: "Create workspaces for members.",
      icon: <IconUsers />,
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-extrabold md:text-5xl tracking-wide w-max mx-auto">
        ROI, ASAP.
      </h1>
      <p className="text-black text-lg mt-4 w-full max-w-xl mx-auto break-words text-center">
        Ever heard of Generative Social Media? There's no faster way to produce
        content. Here's why.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl md:grid-cols-2 mx-auto py-10 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <>
      <div
        className={cn(
          "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800 ",
          (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
          index < 4 && "lg:border-b dark:border-neutral-800"
        )}
      >
        {index < 4 && (
          <div className="bg-gradient-to-t h-full w-full absolute dark:from-neutral-800 duration-200 from-neutral-100 group-hover/feature:opacity-100 inset-0 opacity-0 pointer-events-none to-transparent transition" />
        )}
        {index >= 4 && (
          <div className="bg-gradient-to-b h-full w-full absolute dark:from-neutral-800 duration-200 from-neutral-100 group-hover/feature:opacity-100 inset-0 opacity-0 pointer-events-none to-transparent transition" />
        )}
        <div className="text-neutral-600 dark:text-neutral-400 mb-4 px-10 relative z-10">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 px-10 relative z-10">
          <div className="bg-neutral-300 h-6 rounded-br-full rounded-tr-full w-1 absolute dark:bg-neutral-700 duration-200 group-hover/feature:bg-black group-hover/feature:h-8 inset-y-0 left-0 origin-center transition-all" />
          <span className="text-neutral-800 dark:text-neutral-100 duration-200 group-hover/feature:translate-x-2 inline-block transition">
            {title}
          </span>
        </div>
        <p className="text-neutral-600 text-sm dark:text-neutral-300 max-w-xs px-10 relative z-10">
          {description}
        </p>
      </div>
    </>
  );
};
