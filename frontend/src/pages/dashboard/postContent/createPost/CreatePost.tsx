import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import SplitSection from "@/components/dashboard/splitSection/SplitSection";
import { Card } from "@/components/ui/card";
import { Copy, Download, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccordionComp from "./AccordionComp";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import GeneralPost from "./socialMediaUI/GeneralPost";
import FB from "./socialMediaUI/FB";
import Insta from "./socialMediaUI/InstaPost";
import TwitterPost from "./socialMediaUI/Twitter";

import { FaRegFileAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import LinkedIn from "./socialMediaUI/LinkedIn";
import Pinterest from "./socialMediaUI/Pinterest";

export const formSchema = z.object({
  social: z.array(z.string()).optional(),
  prompt: z.string().min(10, "Prompt is required"),
  images: z.array(z.instanceof(File)).optional(),
  postStatus: z.enum(["draft", "postNow", "scheduleForLater"]),
  scheduledDate: z.date().optional(),
  scheduledTime: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

export const postButtons = [
  {
    key: "general",
    name: "General Post",
    icon: <FaRegFileAlt />,
    color: "#3b82f6",
    status: true,
    condition: () => true,
  },
  {
    key: "facebook",
    name: "Facebook Post",
    icon: <FaFacebookF />,
    color: "#1877F2",
    status: false,
    condition: (socials: string[]) => socials.includes("facebook"),
  },
  {
    key: "instagram",
    name: "Instagram Post",
    icon: <FaInstagram />,
    color: "#E4405F",
    status: false,
    condition: (socials: string[]) => socials.includes("instagram"),
  },
  {
    key: "x",
    name: "X (Twitter) Post",
    icon: <FaTwitter />,
    color: "#000",
    status: false,
    condition: (socials: string[]) => socials.includes("x"),
  },
  {
    key: "linkedin",
    name: "LinkedIn Post",
    icon: <FaLinkedinIn />,
    color: "#0077b5",
    status: false,
    condition: (socials: string[]) => socials.includes("linkedin"),
  },
  {
    key: "pinterest",
    name: "Pinterest Post",
    icon: <FaPinterestP />,
    color: "#e60023",
    status: false,
    condition: (socials: string[]) => socials.includes("pinterest"),
  },
];

export type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

const socialPages: SocialPage[] = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    name: "Facebook Page",
    page: "facebook.com/yourpage",
    value: "facebook",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
    name: "Instagram Page",
    page: "instagram.com/yourpage",
    value: "instagram",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    name: "X (Twitter) Page",
    page: "x.com/yourpage",
    value: "x",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    name: "LinkedIn Page",
    page: "linkedin.com/company/yourpage",
    value: "linkedin",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
    name: "Pinterest Page",
    page: "pinterest.com/yourpage",
    value: "pinterest",
  },
];



const CreatePost = () => {
  const [openAccordianSheet, setOpenAccordianSheet] = useState(false);
  const [openMediaLibrary, setOpenMediaLibrary] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const now = new Date();
  
  function formatTimeTo12Hour(date: Date) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }); // e.g., "03:45 PM"
  }

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      social: undefined,
      prompt: "",
      images: undefined,
      postStatus: "draft",
      scheduledDate: now,
      scheduledTime: formatTimeTo12Hour(now),
    },
  });
  form.watch("prompt");
  const socials = form.watch("social") || [];

  const facebook = socials.find((page) => page == "facebook");
  const facebookDetails = socialPages.find((page) => page.value == facebook);

  const insta = socials.find((page) => page == "instagram");
  const instaDetails = socialPages.find((page) => page.value == insta);

  const twitter = socials.find((page) => page == "x");
  const twitterDetails = socialPages.find((page) => page.value == twitter);

  const linkedIn = socials.find((page) => page == "linkedin");
  const linkedInDetails = socialPages.find((page) => page.value == linkedIn);

  const pinterest = socials.find((page) => page == "pinterest");
  const pinterestDetails = socialPages.find((page) => page.value == pinterest);

  console.log(facebookDetails);

  const [selectedPostKey, setSelectedPostKey] = useState("facebook");

  const visibleButtons = postButtons.filter((btn) => btn.condition(socials));
  useEffect(() => {
    if (
      visibleButtons.length > 0 &&
      !visibleButtons.some((btn) => btn.key === selectedPostKey)
    ) {
      setSelectedPostKey("general");
    }
  }, [visibleButtons]);

  const onSubmit = (data: FormValues) => {
    console.log("SUBMITTED DATA: ", data);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6">
        {/* POST CREATION UI */}
        <SplitSection
          imageSrc="/dashboard/createPosts/post.40db3afb.png"
          title="Create your post"
          description="Quickly craft, customize, and schedule your post for any platform."
          features={[
            "Add captions, media, and hashtags",
            "Choose target platforms for posting",
            "Preview how your post will look",
          ]}
          buttonText="Start Creating"
          onButtonClick={() => setOpenAccordianSheet(true)}
        />
      </div>

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search (3)"
            className="w-1/3 rounded-md border border-gray-300 px-4 py-2"
          />
          <div className="text-sm text-gray-500">
            0 - 3 of 3
            <button className="ml-2 rounded px-2 py-1 hover:bg-gray-200">
              &#8592;
            </button>
            <button className="ml-1 rounded px-2 py-1 hover:bg-gray-200">
              &#8594;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-white shadow-sm"
            >
              {/* Top Icons Row (Bookmark + Menu) */}
              <div className="flex items-center justify-between px-2 pt-2">
                {/* Bookmark Icon */}
                <button className="text-gray-500 hover:text-red-500">
                  <i className="fa-regular fa-bookmark text-base"></i>
                </button>

                {/* Dots Icon (⋮) */}
                <button className="text-xl leading-none text-gray-500 hover:text-gray-700">
                  ...
                </button>
              </div>

              {/* Text Content */}
              <div className="px-4 pt-1 pb-2 text-sm font-medium text-gray-800">
                {index === 0
                  ? "⚡ Excited for the cricket action this..."
                  : "Thinking about making a change? Let’s kick..."}
              </div>

              {/* Image */}
              <img
                src={
                  index === 0
                    ? "/dashboard/createPosts/cricket.png"
                    : "/dashboard/createPosts/smoking.png"
                }
                alt={index === 0 ? "Cricket Banner" : "No Smoking Day"}
                className="h-40 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* SHEET */}
      <Sheet open={openAccordianSheet} onOpenChange={setOpenAccordianSheet}>
        <SheetContent
          side="left"
          className="max:h-max min:h-full flex w-full gap-0 md:w-[85%] [&>button.absolute.right-4.top-4]:hidden"
        >
          <SheetHeader className="flex flex-row justify-end border-b">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-2 hover:bg-gray-100"
            >
              <Copy className="h-4 w-4" />
            </Button>{" "}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-2 hover:bg-gray-100"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-2 hover:bg-gray-100"
            >
              <Trash2 className="h-4 w-4" />
            </Button>{" "}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-2 hover:bg-gray-100"
              onClick={() => setOpenAccordianSheet(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetHeader>

          <div className="flex h-full overflow-y-scroll">
            <AccordionComp
              form={form}
              onOpenModal={() => setOpenModal(true)}
              onOpenMediaLibrary={() => setOpenMediaLibrary(true)}
              buttons={visibleButtons}
              selectedPostKey={selectedPostKey}
              onSelectPost={setSelectedPostKey}
              socialPages={socialPages}
            />
            <Card className="hidden h-full w-full flex-1 items-center justify-center rounded-none border-t-0 border-r-0 border-b-0 border-l p-4 shadow-none md:flex">
              {selectedPostKey === "general" && (
                <GeneralPost
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
              {selectedPostKey === "facebook" && (
                <FB
                  social={facebookDetails}
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
              {selectedPostKey === "instagram" && (
                <Insta
                  social={instaDetails}
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
              {selectedPostKey === "x" && (
                <TwitterPost
                  social={twitterDetails}
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
              {selectedPostKey === "linkedin" && (
                <LinkedIn
                  social={linkedInDetails}
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
              {selectedPostKey === "pinterest" && (
                <Pinterest
                  social={pinterestDetails}
                  prompt={form.getValues("prompt")}
                  images={form.getValues("images") || []}
                />
              )}
            </Card>
          </div>

          <SheetFooter className="flex flex-row items-center justify-end border-t">
            <Button variant="outline">Close</Button>
            <Button onClick={() => form.handleSubmit(onSubmit)()}>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <Sheet open={openMediaLibrary} onOpenChange={setOpenMediaLibrary}>
        <SheetContent
          side="right"
          className="flex w-full gap-0 overflow-scroll overflow-x-hidden md:w-[85%] [&>button.absolute.right-4.top-4]:hidden"
        ></SheetContent>
      </Sheet>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="p-8">{/* <FB /> */}</DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;
