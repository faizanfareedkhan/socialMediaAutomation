"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function PopOver({name, color}) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Button className="rounded-full"> {name}</Button>
        </PopoverTrigger>

        <PopoverContent
          side="left"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="bg-tertiary"
        >
          <div className="px-1 py-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help text-sm font-bold">
                  Popover Content
                </div>
              </TooltipTrigger>
              <TooltipContent>This is a tooltip on the title!</TooltipContent>
            </Tooltip>

          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}
