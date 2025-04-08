import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircleIcon, Link } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FB from "./FB/FB";

const SocialMediaAccounts = () => {
  // Array of social media integrations
  // const integrations = [
  //   { name: "Facebook", icon: <Facebook className="h-8 w-8" /> },
  // ];

  return (
    <div className="flex h-full w-full gap-6">
      <div className="flex w-full flex-wrap gap-6 px-4 lg:px-6">
        <Card className="flex w-full justify-between">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>
              Connect your social media accounts to schedule and publish content
            </CardDescription>
          </CardHeader>
          <CardContent className="flex w-full flex-col items-center justify-center gap-2">
            <Link className="h-10 w-10 rounded-full bg-gray-200 p-2" />
            <div>No Accounts Connected</div>
            <p>
              Connect your social media accounts to schedule and publish content
            </p>
          </CardContent>
          <CardFooter className="flex w-full items-center justify-center gap-2 border-t">
            <Dialog>
              <DialogTrigger className="flex gap-2 border-none focus-visible:border-none">
                <PlusCircleIcon />
                Add Social Accounts
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Social Accounts</DialogTitle>
                  <DialogDescription>All integrations</DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap gap-4">
                  {/* {integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-md border p-4"
                    >
                      {integration.icon}
                      <span>{integration.name}</span>
                    </div>
                  ))} */}
                  <FB />
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
