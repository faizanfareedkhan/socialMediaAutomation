import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ThumbsUp, MessageSquare, Send, User } from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type LinkedInPostProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const LinkedInPost = ({ prompt, images, social }: LinkedInPostProps) => {
  return (
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="pb-2">
        <div className="flex gap-3">
          {/* Profile Picture */}
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
            {social?.image ? (
              <img
                src={social.image}
                alt={social.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <User className="text-gray-500" />
              </div>
            )}
          </div>

          {/* Name, job title & time */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold text-gray-900">
              {social?.page || "Name"}
            </span>
            <span className="text-xs text-gray-500">
              {social?.value || "Job Title · 1h ago"}
            </span>
          </div>
        </div>
      </CardHeader>

      {/* Post Content */}
      <CardContent className="pt-1 pb-2">
        <p className="text-sm whitespace-pre-line text-gray-800">{prompt}</p>
      </CardContent>

      {/* Image Carousel */}
      {images?.length > 0 && (
        <div className="relative w-full">
          <Carousel>
            <CarouselContent>
              {images.map((file, index) => (
                <CarouselItem
                  key={index}
                  className="flex h-[400px] items-center justify-center"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded ${index}`}
                    className="max-h-full max-w-full rounded-md object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
            <CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>
      )}

      {/* Footer Actions */}
      <CardContent className="flex justify-around border-t pt-3 pb-3 text-gray-500">
        <div className="flex cursor-pointer items-center gap-1 hover:text-blue-600">
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm font-medium">Like</span>
        </div>
        <div className="flex cursor-pointer items-center gap-1 hover:text-blue-600">
          <MessageSquare className="h-4 w-4" />
          <span className="text-sm font-medium">Comment</span>
        </div>
        <div className="flex cursor-pointer items-center gap-1 hover:text-blue-600">
          <Send className="h-4 w-4" />
          <span className="text-sm font-medium">Share</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInPost;
