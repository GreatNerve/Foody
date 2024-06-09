"use client";
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function InputThumbUpDown({
  label,
  discription,
  id,
  className,
}: {
  label: string;
  discription: string;
  id: string;
  className?: string;
}) {
  const [value, setValue] = useState<boolean | undefined>(undefined);
  return (
    <div className={className}>
      <Label htmlFor={id} className="block text-xl font-medium">
        {label}
      </Label>
      <p className="text-sm text-gray-300">{discription}</p>
      <input
        id={id}
        className="hidden"
        type="text"
        value={value ? "yes" : "no"}
        name={id}
        onChange={(e) => setValue(e.target.checked)}
      />
      <div className="flex gap-4 mt-4">
        <div className="flex">
          <Button
            className={cn(
              "flex items-center gap-2 text-lg text-red-500 hover:text-red-500 transition-all ease-in-out duration-300 px-4 py-6 rounded-full hover:bg-red-100/20",
              value === false && "bg-red-100/20 text-red-600"
            )}
            onClick={() => setValue(false)}
            variant="ghost"
            type="button"
          >
            <ThumbsDown
              size={36}
            />{" "}
            No
          </Button>
        </div>
        <div className="flex">
          <Button
            className={cn(
              "flex items-center gap-2 text-lg text-green-500 hover:text-green-500 transition-all ease-in-out duration-300 px-4 py-6 rounded-full hover:bg-green-300/20",
              value === true && "bg-green-100/20 text-green-700"
            )}
            onClick={() => setValue(true)}
            variant="ghost"
            type="button"
          >
            <ThumbsUp
              size={36}
            />{" "}
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
}
