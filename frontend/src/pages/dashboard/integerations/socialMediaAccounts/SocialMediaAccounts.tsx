import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitSection from "@/components/dashboard/splitSection/SplitSection";

// Dummy social platform data
const socialPlatforms = [
  {
    name: "Facebook Page",
    type: "Social",
    icon: "/icons/facebook.svg",
    available: true,
  },
  {
    name: "Instagram Business",
    type: "Social",
    icon: "/icons/instagram.svg",
    available: true,
  },
  {
    name: "X (Twitter)",
    type: "Social",
    icon: "/icons/twitter.svg",
    available: true,
  },
  {
    name: "LinkedIn",
    type: "Social",
    icon: "/icons/linkedin.svg",
    available: true,
  },
  {
    name: "Pinterest",
    type: "Social",
    icon: "/icons/pinterest.svg",
    available: true,
  },
  {
    name: "Threads",
    type: "Social",
    icon: "/icons/threads.svg",
    available: false,
  },
];

const profiles = [
  {
    name: "page name",
    avatar: "/avatars/profile1.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile2.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile3.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile4.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile5.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile6.png",
  },
  {
    name: "page name",
    avatar: "/avatars/profile7.png",
  },
];

const SocialMediaAccounts = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(Array(profiles.length).fill(true));

  const toggleSelectAll = () => {
    const allSelected = selected.every(Boolean);
    setSelected(Array(profiles.length).fill(!allSelected));
  };

  const toggleSingle = (index: number) => {
    const updated = [...selected];
    updated[index] = !updated[index];
    setSelected(updated);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6">
        {/* SOCIAL ACCOUNTS UI */}
        <SplitSection
          imageSrc="/dashboard/social-accounts/socials.8509b0e0.png"
          title="Connect your social profiles"
          description="Connecting socials just got easier, thanks to our integrations made just for you."
          features={[
            "Choose from different post variations",
            "Determine posting schedule",
            "Use pre-designed templates",
          ]}
          buttonText="Connect"
          onButtonClick={() => setOpen(true)} // ✅ trigger sheet from here
        />

        {/* PROFILE SELECTOR UI */}
        <div className="w-full rounded-lg border p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Select profiles</h2>
            <p className="text-sm">
              Pick the profiles you want to connect. If you’re missing any you
              can follow our Help Guides to reset access.
            </p>
          </div>

          <div className="mb-2 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected.every(Boolean)}
              onChange={toggleSelectAll}
              className="h-4 w-4 accent-black"
            />
            <span className="text-sm font-medium text-black">
              {selected.every(Boolean) ? "Deselect all" : "Select all"} (
              {selected.filter(Boolean).length} / {profiles.length})
            </span>
          </div>

          <div className="space-y-3 rounded-md p-4">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 rounded-md px-4 py-3 shadow-sm"
              >
                <input
                  type="checkbox"
                  checked={selected[index]}
                  onChange={() => toggleSingle(index)}
                  className="h-4 w-4 accent-black"
                />
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-black">
                  {profile.name}
                </span>
              </div>
            ))}
          </div>

          <Button className="mt-4">Connect</Button>
        </div>
        <div className="mt-5 grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              name: "Hakeem sharafat Ali Shah official",
              image: "https://via.placeholder.com/40",
              posts: 6,
            },
            {
              name: "Allah Shafi Allah Kafi",
              image: "https://via.placeholder.com/40",
              posts: 1,
            },
            {
              name: "Hafiz dawakahana",
              image: "https://via.placeholder.com/40",
              posts: 1,
            },
          ]
            .flatMap((entry) => Array(entry.posts).fill(entry))
            .map((entry, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow"
              >
                <img
                  src={entry.image}
                  alt={entry.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {entry.name}
                  </p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Connect profiles</SheetTitle>
            <SheetDescription>
              Connect social media profiles by clicking below.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 max-h-[calc(100vh-150px)] space-y-3 overflow-y-auto pr-2">
            {socialPlatforms.map((platform, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-md border px-4 py-3 ${
                  platform.available
                    ? "cursor-pointer bg-white hover:bg-gray-100"
                    : "bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={platform.icon}
                    alt={platform.name}
                    className="h-6 w-6"
                  />
                  <div>
                    <p className="font-medium text-black">{platform.name}</p>
                    <p className="text-sm text-gray-500">{platform.type}</p>
                  </div>
                </div>
                {platform.available ? (
                  <ArrowRight className="h-5 w-5 text-gray-500" />
                ) : (
                  <span className="rounded bg-gray-200 px-2 py-0.5 text-xs font-semibold text-black">
                    COMING SOON
                  </span>
                )}
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SocialMediaAccounts;
