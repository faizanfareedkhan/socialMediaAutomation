import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionComp() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl md:grid-cols-2 mx-auto py-10 relative z-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
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
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
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
        <div className="bg-neutral-300 h-6 rounded-br-full rounded-tr-full w-1 absolute dark:bg-neutral-700 duration-200 group-hover/feature:bg-blue-500 group-hover/feature:h-8 inset-y-0 left-0 origin-center transition-all" />
        <span className="text-neutral-800 dark:text-neutral-100 duration-200 group-hover/feature:translate-x-2 inline-block transition">
          {title}
        </span>
      </div>
      <p className="text-neutral-600 text-sm dark:text-neutral-300 max-w-xs px-10 relative z-10">
        {description}
      </p>
    </div>
  );
};
