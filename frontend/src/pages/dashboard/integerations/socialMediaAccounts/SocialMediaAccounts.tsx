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
    name: "Hakeem sharafat Ali Shah official",
    avatar: "/avatars/profile1.png",
  },
  {
    name: "Hakeem sharafat Ali Shah official",
    avatar: "/avatars/profile2.png",
  },
  {
    name: "Hakeem sharafat Ali Shah official",
    avatar: "/avatars/profile3.png",
  },
  {
    name: "Hakeem sharafat Ali Shah official",
    avatar: "/avatars/profile4.png",
  },
  {
    name: "Hafiz dawakana",
    avatar: "/avatars/profile5.png",
  },
  {
    name: "Hakeem sharafat Ali Shah official",
    avatar: "/avatars/profile6.png",
  },
  {
    name: "Allah Shafi Allah Kafi",
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
    <div className="flex flex-col items-center justify-center bg-white p-6 text-black">
      {/* SOCIAL ACCOUNTS UI */}
      <div className="mb-12 flex h-auto w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:flex-row">
        {/* Left Panel */}
        <div className="hidden w-full items-center justify-center bg-gray-100 p-4 lg:flex md:w-2/5">
          <img
            src="/dashboard/socials.8509b0e0.png"
            alt="Social Profiles"
            className="h-auto max-w-full rounded-lg shadow"
          />
        </div>

        {/* Right Panel */}
        <div className="flex w-full flex-col items-start justify-center p-6 md:w-3/5">
          <h3 className="mb-3 text-2xl font-semibold">
            Connect your social profiles
          </h3>
          <p className="mb-2 text-gray-600">
            Connecting socials just got easier, thanks to our integrations made
            just for you.
          </p>
          <ul className="mb-5 list-inside list-disc space-y-1 text-gray-700">
            <li>Choose from different post variations, including general</li>
            <li>Determine posting schedule according to you</li>
            <li>Use pre-designed templates to get started quickly</li>
          </ul>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              {/* <button className="cursor-pointer rounded bg-black px-6 py-2 text-sm text-white">
                Connect
              </button> */}
              <Button>Connect</Button>
            </SheetTrigger>
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
                        <p className="font-medium text-black">
                          {platform.name}
                        </p>
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
        </div>
      </div>

      {/* PROFILE SELECTOR UI */}
      <div className="w-full max-w-4xl rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Select profiles</h2>
          <p className="text-sm text-gray-600">
            Pick the profiles you want to connect. If you’re missing any you can
            follow our <span className="text-pink-600">Help Guides</span> to
            reset access.
          </p>
        </div>

        <div className="mb-2 flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected.every(Boolean)}
            onChange={toggleSelectAll}
            className="h-4 w-4 accent-pink-600"
          />
          <span className="text-sm font-medium text-black">
            {selected.every(Boolean) ? "Deselect all" : "Select all"} (
            {selected.filter(Boolean).length} / {profiles.length})
          </span>
        </div>

        <div className="space-y-3 rounded-md bg-gray-100 p-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 rounded-md bg-white px-4 py-3 shadow-sm"
            >
              <input
                type="checkbox"
                checked={selected[index]}
                onChange={() => toggleSingle(index)}
                className="h-4 w-4 accent-pink-600"
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

        <button className="mt-6 rounded bg-black px-6 py-2 text-sm text-white hover:bg-pink-700">
          Connect
        </button>
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
