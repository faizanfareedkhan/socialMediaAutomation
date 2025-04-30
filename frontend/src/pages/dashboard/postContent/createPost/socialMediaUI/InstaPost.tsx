import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type InstaProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const Insta = ({ prompt, images, social }: InstaProps) => {
  return (
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {/* Profile Pic */}
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100">
            {social?.image && (
              <img
                src={social.image}
                alt={social.name}
                className="h-10 w-10 object-cover"
              />
            )}
          </div>
          {/* Username & menu */}
          <div className="flex w-full items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              {social?.page}
            </span>
            <MoreHorizontal />
          </div>
        </div>
      </CardHeader>

      {/* Image Carousel */}
      {images?.length > 0 && (
        <div className="relative w-full">
          <Carousel>
            <CarouselContent>
              {images.map((file, index) => (
                <CarouselItem key={index}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded ${index}`}
                    className=" h-max w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
            <CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>
      )}

      {/* Footer buttons */}
      <CardContent className="flex justify-between pt-3">
        <div className="flex gap-4">
          <Heart className="h-5 w-5 cursor-pointer text-gray-500 hover:text-red-500" />
          <MessageCircle className="h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500" />
          <Send className="h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500" />
        </div>
      </CardContent>

      {/* Caption */}
      <CardContent className="pt-1 pb-3">
        <p className="text-sm whitespace-pre-line text-gray-800">{prompt}</p>
      </CardContent>
    </Card>
  );
};

export default Insta;
