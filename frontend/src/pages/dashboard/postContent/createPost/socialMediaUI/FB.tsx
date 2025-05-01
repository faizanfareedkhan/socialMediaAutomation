import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type FBProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const FB = ({ prompt, images, social }: FBProps) => {
  return (
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <img src={social?.image} alt="" />
          </div>
          {/* Name & timestamp */}
          <div className="flex w-full flex-col">
            <span className="flex justify-between text-sm font-semibold text-gray-900">
              <span>{social?.page}</span>
              <MoreHorizontal />
            </span>
            <span className="text-xs text-gray-500">Just now</span>
          </div>
        </div>
      </CardHeader>

      {/* Prompt */}
      <CardContent className="px-4 pt-0">
        <p className="text-sm whitespace-pre-line text-gray-800">
          {prompt.split(`\n`).map((word) => (
            <>
              {word.trim()}
              <br />
            </>
          ))}
        </p>
      </CardContent>

      {/* Image Carousel */}
      {images?.length > 0 && (
        <CardContent className="px-0 pt-4">
          <div className="relative w-full">
            <Carousel>
              <CarouselContent>
                {images.map((file, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded ${index}`}
                      className="max-h-[400px] w-full rounded-md object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md transition hover:bg-gray-100" />
              <CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md transition hover:bg-gray-100" />
            </Carousel>
          </div>
        </CardContent>
      )}

      {/* Footer buttons skeleton */}
      <div className="flex justify-around border-t px-4 pt-3 pb-4">
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
          <ThumbsUp className="h-5 w-5" />
          Like
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
          <MessageCircle className="h-5 w-5" />
          Comment
        </button>
        <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
          <Share2 className="h-5 w-5" />
          Share
        </button>
      </div>
    </Card>
  );
};

export default FB;
