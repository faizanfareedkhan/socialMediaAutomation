import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const formatBreadcrumb = (segment: string) => {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Header = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || "";

  const [open, setOpen] = useState(false);

  const buttonLabels: Record<string, string> = {
    post: "Post",
    socials: "Add Socials",
  };

  const sheetSide = currentPage === "create-post" ? "left" : "right";
  const buttonLabel = buttonLabels[currentPage] || "Click";

  return (
    <header className="mb-4 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const formattedSegment = formatBreadcrumb(segment);
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

              return (
                <BreadcrumbItem key={href}>
                  {isLast ? (
                    <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink>{formattedSegment}</BreadcrumbLink>
                      <ul>
                        <BreadcrumbSeparator />
                      </ul>
                    </>
                  )}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Sheet Trigger Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>{buttonLabel}</Button>
        </SheetTrigger>
        <SheetContent side={sheetSide}>
          <SheetHeader>
            <SheetTitle>{buttonLabel}</SheetTitle>
            <SheetDescription>
              {currentPage === "create-post"
                ? "Create a new post here."
                : "Add your social accounts here."}
            </SheetDescription>
          </SheetHeader>

          {/* Put your form or content inside here */}
          <div className="mt-4">
            {currentPage === "create-post" ? (
              <p>Post creation form goes here.</p>
            ) : (
              <p>Socials linking form goes here.</p>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
