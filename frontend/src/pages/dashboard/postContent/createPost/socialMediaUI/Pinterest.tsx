import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bookmark, Share2, MoreHorizontal } from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type PinterestProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const Pinterest = ({ prompt, images, social }: PinterestProps) => {
  return (
    <Card className="w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="flex items-start justify-between pb-2">
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100">
            {social?.image && (
              <img
                src={social.image}
                alt={social.name}
                className="h-10 w-10 object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              {social?.page}
            </span>
            <span className="text-xs text-gray-500">
              Pinned by {social?.name}
            </span>
          </div>
        </div>
        <MoreHorizontal className="text-gray-400" />
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
                    className="max-h-[500px] w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
            <CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>
      )}

      {/* Footer */}
      <CardContent className="flex items-center justify-between pt-3">
        <div className="text-sm font-medium whitespace-pre-line text-gray-800">
          {prompt}
        </div>
        <div className="flex gap-2">
          <Bookmark className="h-5 w-5 cursor-pointer text-gray-500 hover:text-red-500" />
          <Share2 className="h-5 w-5 cursor-pointer text-gray-500 hover:text-blue-500" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Pinterest;
