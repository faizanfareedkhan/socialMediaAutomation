// import { Card } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { PlatformForm } from "./forms/image-form/steps/step1";
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

// export default function CreatePost() {
//   return (
//     <>
//       <div className="container mx-auto">
//         <Tabs defaultValue="image" className="w-full">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="image">Image</TabsTrigger>
//             <TabsTrigger value="video">Video</TabsTrigger>
//             <TabsTrigger value="text">Text</TabsTrigger>
//           </TabsList>
//           <TabsContent value="image">
//             <Card className="p-6">
//               <PlatformForm />
//             </Card>
//           </TabsContent>
//           <TabsContent value="video">
//             <Card>Video</Card>
//           </TabsContent>
//           <TabsContent value="text">
//             <Card>Text</Card>
//           </TabsContent>
//         </Tabs>
//         {/* Sheet Trigger Button */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild>
//             <Button>{buttonLabel}</Button>
//           </SheetTrigger>
//           <SheetContent side={sheetSide}>
//             <SheetHeader>
//               <SheetTitle>{buttonLabel}</SheetTitle>
//               <SheetDescription>
//                 {currentPage === "create-post"
//                   ? "Create a new post here."
//                   : "Add your social accounts here."}
//               </SheetDescription>
//             </SheetHeader>

//             {/* Put your form or content inside here */}
//             <div className="mt-4">
//               {currentPage === "create-post" ? (
//                 <p>Post creation form goes here.</p>
//               ) : (
//                 <p>Socials linking form goes here.</p>
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </>
//   );
// }
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import SplitSection from "@/components/dashboard/splitSection/SplitSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlatformForm } from "./forms/image-form/steps/step1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Bold,
  Bookmark,
  Bot,
  Calendar,
  ChartArea,
  Copy,
  Download,
  Hash,
  Heart,
  Image,
  Italic,
  MessageCircle,
  MoreHorizontal,
  PictureInPicture,
  Send,
  Share2,
  Smile,
  ThumbsUp,
  Trash2,
  Underline,
  X,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";



const CreatePost = () => {
  const [open, setOpen] = useState(false);
  // const id = useId();

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
          onButtonClick={() => setOpen(true)}
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
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-[85%] overflow-scroll [&>button.absolute.right-4.top-4]:hidden"
        >
          <SheetHeader className="flex flex-row justify-end border pr-8">
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
              onClick={() => setOpen(false)} // 👈 close the sheet here
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetHeader>{" "}
          <div className="flex gap-2 p-2">
            <div className="flex-2">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer border no-underline hover:bg-gray-100 hover:text-inherit hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Calendar />
                      Planning
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="bg-white p-2">
                      <ToggleGroup
                        type="single"
                        className="inline-flex overflow-hidden rounded-lg border border-gray-300"
                      >
                        <ToggleGroupItem
                          value="draft"
                          aria-label="Toggle Draft"
                          className="border-r border-gray-300 bg-white px-4 py-2 text-gray-700 last:border-r-0 hover:bg-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-white"
                        >
                          Draft
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="postNow"
                          aria-label="Toggle Post Now"
                          className="border-r border-gray-300 bg-white px-4 py-2 text-gray-700 last:border-r-0 hover:bg-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-white"
                        >
                          Post now
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="scheduleForLater"
                          aria-label="Toggle Schedule for later"
                          className="bg-white px-8 py-2 text-gray-700 hover:bg-gray-100 data-[state=on]:bg-gray-900 data-[state=on]:text-white"
                        >
                          Schedule for later
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer border no-underline hover:bg-gray-100 hover:text-inherit hover:no-underline">
                    <div className="flex items-center gap-2">
                      <Image />
                      Content
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="p-6">
                      <PlatformForm />
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>{" "}
            </div>
            <Card className="h-full flex-1 p-4">
              <Card className="w-full max-w-xl">
                <CardHeader className="text-lg font-semibold">
                  Latest Announcement
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800">
                    We're rolling out new features soon! Stay tuned. 🔔
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <img
                    src="/avatars/fb-avatar.png"
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <CardTitle className="text-sm font-semibold">
                      John Doe
                    </CardTitle>
                    <p className="text-xs text-gray-500">2 hrs · 🌐</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p>This is my latest update! Loving the vibes today.</p>
                  <img
                    src="/posts/fb-post-image.jpg"
                    alt="Facebook Post"
                    className="w-full rounded-md"
                  />
                </CardContent>

                <CardFooter className="flex justify-between border-t pt-2 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    Like
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    Comment
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    Share
                  </div>
                </CardFooter>
              </Card>

              <Card className="w-full max-w-xl">
                <CardHeader className="flex flex-row items-center justify-between px-4 pt-4 pb-2">
                  <div className="flex items-center gap-3">
                    <img
                      src="/avatars/insta-avatar.jpg"
                      alt="User"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">jane_doe</span>
                  </div>
                  <MoreHorizontal className="h-5 w-5 text-gray-500" />
                </CardHeader>

                <CardContent className="p-0">
                  <img
                    src="/posts/insta-post.jpg"
                    alt="Instagram Post"
                    className="w-full object-cover"
                  />
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-1 px-4 pt-2">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-4">
                      <Heart className="h-5 w-5" />
                      <MessageCircle className="h-5 w-5" />
                      <Send className="h-5 w-5" />
                    </div>
                    <Bookmark className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">1,240 likes</p>
                  <p className="text-sm">
                    <span className="font-semibold">jane_doe</span> enjoying the
                    summer vibes 🌞🏖️
                  </p>
                  <p className="text-xs text-gray-500">View all 42 comments</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </CardFooter>
              </Card>

              <Card className="w-full max-w-xl">
                <CardHeader className="flex items-center gap-3">
                  <img
                    src="/avatars/twitter-avatar.png"
                    alt="Profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">@johndoe · 1h</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">
                    Loving the new React 19 features! 🚀🔥
                  </p>
                </CardContent>
              </Card>

              <Card className="w-full max-w-xl">
                <CardHeader className="flex items-center gap-3">
                  <img
                    src="/avatars/linkedin-avatar.png"
                    alt="Profile"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-sm text-gray-500">
                      Software Engineer at Meta
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-gray-800">
                    Grateful to have spoken at ReactConf 2025. Here’s what I
                    learned:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>React Server Components are the future</li>
                    <li>Design for scale early</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative w-full max-w-[280px] overflow-hidden rounded-xl border-none shadow-md">
                {/* Image */}
                <img
                  src="/posts/pin-post.jpg"
                  alt="Pinterest Post"
                  className="h-[360px] w-full object-cover"
                />

                {/* Hover Overlay (like Pinterest UI) */}
                <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-3 transition-all duration-300 hover:bg-black/30">
                  {/* Top Right Save Button */}
                  <div className="flex justify-end">
                    <button className="rounded-full bg-red-600 px-4 py-1 text-sm font-semibold text-white hover:bg-red-700">
                      Save
                    </button>
                  </div>

                  {/* Bottom Details */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold">modernhome.com</span>
                      <span className="truncate">Kitchen Design Ideas 🍽️</span>
                    </div>
                    <Bookmark className="h-5 w-5 text-white" />
                  </div>
                </div>
              </Card>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CreatePost;
