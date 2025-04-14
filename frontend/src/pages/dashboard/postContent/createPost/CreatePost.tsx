import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlatformForm } from "./forms/image-form/steps/step1";

export default function CreatePost() {
  return (
    <>
      <div className="container mx-auto">
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="image">Image</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="text">Text</TabsTrigger>
          </TabsList>
          <TabsContent value="image">
            <Card className="p-6">
              <PlatformForm />
            </Card>
          </TabsContent>
          <TabsContent value="video">
            <Card>Video</Card>
          </TabsContent>
          <TabsContent value="text">
            <Card>Text</Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
