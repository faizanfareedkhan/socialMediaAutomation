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

export default function PopOver({ color }) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className={`h-5 w-5 rounded-full border ${color}`}>
            {/* {name} */}
          </button>
        </PopoverTrigger>

        <PopoverContent
          side="left"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="bg-accent w-32"
        >
          <div className="px-0.5 py-0.5">
            <div className="flex gap-1.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-base h-5 w-5 cursor-help rounded-full border" />
                </TooltipTrigger>
                <TooltipContent className="">base</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-contrast h-5 w-5 cursor-help rounded-full border" />
                </TooltipTrigger>
                <TooltipContent >contrast</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-accent h-5 w-5 cursor-help rounded-full border" />
                </TooltipTrigger>
                <TooltipContent >accent</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}
