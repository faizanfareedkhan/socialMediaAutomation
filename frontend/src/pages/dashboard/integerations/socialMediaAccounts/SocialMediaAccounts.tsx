import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoIcon, Link, PlusCircleIcon } from "lucide-react";

const SocialMediaAccounts = () => {
  const data = [{}];
  return (
    <div className="flex w-full h-full gap-6">
      <div className="flex flex-wrap px-4 w-full lg:px-6 gap-6">
        <Card className="w-full flex justify-between ">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>
              Connent your social media accounts to schedual and publish content
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-2 flex-col w-full flex items-center justify-center">
            <Link className="rounded-full w-10 h-10 p-2 bg-gray-200" />
            <div>No Accounts Connected</div>
            <p>
              Connent your social media accounts to schedual and publish content
            </p>
          </CardContent>
          <CardFooter className="gap-2 border-t w-full flex items-center justify-center">
            <PlusCircleIcon />
            <p>Add Social Accounts</p>
          </CardFooter>
        </Card>
        {/* <Card className="w-full flex justify-between ">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>
              Connent your social media accounts to schedual and publish content
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-2 flex-col w-full flex items-center justify-center">
            <Link className="rounded-full w-10 h-10 p-2 bg-gray-200" />
            <div>No Accounts Connected</div>
            <p>
              Connent your social media accounts to schedual and publish content
            </p>
          </CardContent>
          <CardFooter className="gap-2 border-t w-full flex items-center justify-center">
            <PlusCircleIcon />
            <p>Add Social Content</p>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
};

export default SocialMediaAccounts;
