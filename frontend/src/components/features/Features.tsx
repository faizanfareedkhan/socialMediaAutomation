import { Tabs } from "../ui/tabs";
import ChatgptIcon from "../../../public/features/icons/ChatGPT.png";
import AutomationIcon from "../../../public/features/icons/Automation.svg";
import SchedulingIcon from "../../../public/features/icons/Scheduling.svg";
import AnalyticsIcon from "../../../public/features/icons/Analytics.svg";

import ChatgptImage from "../../../public/features/images/Chatgpt.png";
import AutomationImage from "../../../public/features/images/Automation.png";
import SchedulingImage from "../../../public/features/images/Scheduling.png";
import AnalyticsImage from "../../../public/features/images/Analytics.png";

export default function TabsComp() {
  const tabs = [
    {
      title: "AI Writing",
      value: "AI Writing",
      icon: ChatgptIcon,
      content: (
        <div className="flex flex-col bg-gradient-to-br bg-white border border-gray-200 h-auto p-10 rounded-2xl shadow-lg w-full from-gray-700 gap-10 items-center lg:flex-row lg:h-[500px] relative to-gray-900 top-[-100px]">
          <div className="flex-1 text-white space-y-4">
            <h2 className="text-2xl font-bold">Write your content using AI</h2>
            <p className="text-gray-200 text-lg font-medium">
              Instant recommendations on performance or reach with automated
              reporting.
            </p>
            <span className="text-gray-200">
              Alternative to - Sprout Social, Hootsuite
            </span>
          </div>
          <DummyContent image={ChatgptImage} />
        </div>
      ),
    },
    {
      title: "Automation",
      value: "Automation",
      icon: AutomationIcon,
      content: (
        <div className="flex flex-col bg-gradient-to-br bg-white border border-gray-200 h-auto p-10 rounded-2xl shadow-lg w-full from-gray-700 gap-10 items-center lg:flex-row lg:h-[500px] relative to-gray-900 top-[-100px]">
          <div className="flex-1 text-white space-y-4">
            <h2 className="text-2xl font-bold">
              Grow followers with non-stop content.
            </h2>
            <p className="text-gray-200 text-lg font-medium">
              Create images, videos or music for social media. Or put it all on
              autopilot.
            </p>
            <span className="text-gray-200">
              Alternative to - Canva, Zapier, IFTTT
            </span>
          </div>
          <DummyContent image={AutomationImage} />
        </div>
      ),
    },
    {
      title: "Scheduling",
      value: "Scheduling",
      icon: SchedulingIcon,
      content: (
        <div className="flex flex-col bg-gradient-to-br bg-white border border-gray-200 h-auto p-10 rounded-2xl shadow-lg w-full from-gray-700 gap-10 items-center lg:flex-row lg:h-[500px] relative to-gray-900 top-[-100px]">
          <div className="flex-1 text-white space-y-4">
            <h2 className="text-2xl font-bold">Schedule to social media.</h2>
            <p className="text-gray-200 text-lg font-medium">
              Plan, schedule and approve content at optimal times. Even for
              years upfront.
            </p>
            <span className="text-gray-200">
              Alternative to - Hootsuite, Buffer
            </span>
          </div>
          <DummyContent image={SchedulingImage} />
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "Analytics",
      icon: AnalyticsIcon,
      content: (
        <div className="flex flex-col bg-gradient-to-br bg-white border border-gray-200 h-auto p-10 rounded-2xl shadow-lg w-full from-gray-700 gap-10 items-center lg:flex-row lg:h-[500px] relative to-gray-900 top-[-100px]">
          <div className="flex-1 text-white space-y-4">
            <h2 className="text-2xl font-bold">
              Good strategy comes from data.
            </h2>
            <p className="text-gray-200 text-lg font-medium">
              Instant recommendations on performance or reach with automated
              reporting.
            </p>
            <span className="text-gray-200">
              Alternative to - Sprout Social, Hootsuite
            </span>
          </div>
          <DummyContent image={AnalyticsImage} />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen justify-start w-full [perspective:1000px] b items-start max-w-5xl md:h-[40rem] mx-auto my-40 relative">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ image }) => {
  return (
    <img
      src={image}
      alt="dummy image"
      width="1000"
      height="1000"
      className="rounded-xl w-[50%] -bottom-10 md:h-[90%] mx-auto object-cover object-left-top"
    />
  );
};
