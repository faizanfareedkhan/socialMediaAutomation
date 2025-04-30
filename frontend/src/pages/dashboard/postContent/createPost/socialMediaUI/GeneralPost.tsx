import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  MoreHorizontal,
  User,
} from "lucide-react";

type SocialPage = {
  image: string;
  name: string;
  page: string;
  value: string;
};

type GeneralPostProps = {
  social?: SocialPage;
  prompt: string;
  images: File[];
};

const GeneralPost = ({ prompt, images, social }: GeneralPostProps) => {
  console.log(social);
  return (
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-sm">
      {/* Header */}
      <CardHeader className="p-2">
        <div className="flex items-center gap-2 px-4">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
            <User className="text-gray-500" />
          </div>
          {/* Name & timestamp */}
          <div className="flex w-full flex-col">
            <span className="flex items-center justify-between text-sm font-semibold text-gray-900">
              <span className="h-2 w-1/2 rounded bg-gray-300"></span>
              <MoreHorizontal />
            </span>
            <span className="h-2 w-1/4 rounded bg-gray-300"></span>
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
      <div className="flex justify-around  gap-6 px-2 ">
        <span className="h-2 w-1/2 rounded bg-gray-300"></span>{" "}
        <span className="h-2 w-1/2 rounded bg-gray-300"></span>{" "}
        <span className="h-2 w-1/2 rounded bg-gray-300"></span>
      </div>
    </Card>
  );
};

export default GeneralPost;
