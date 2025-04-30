import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, MessageCircle, Repeat2, Share, User } from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type TwitterPostProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const TwitterPost = ({ prompt, images, social }: TwitterPostProps) => {
  return (
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="pb-2">
        <div className="flex gap-3">
          {/* Profile Pic */}
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100">
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

          {/* Name, handle & timestamp */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-gray-900">
                {social?.page || "Username"}
              </span>
              <span className="text-gray-500">@{social?.name || "handle"}</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500">1h</span>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Post Text */}
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

      {/* Footer icons */}
      <CardContent className="flex justify-around pt-3 pb-2 text-gray-500">
        <MessageCircle className="h-4 w-4 cursor-pointer hover:text-blue-500" />
        <Repeat2 className="h-4 w-4 cursor-pointer hover:text-green-500" />
        <Heart className="h-4 w-4 cursor-pointer hover:text-red-500" />
        <Share className="h-4 w-4 cursor-pointer hover:text-blue-500" />
      </CardContent>
    </Card>
  );
};

export default TwitterPost;
