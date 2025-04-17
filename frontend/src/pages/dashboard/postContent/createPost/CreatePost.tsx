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


import React from 'react'

const CreatePost = () => {
  return (
    <div>CreatePost</div>
  )
}

export default CreatePost