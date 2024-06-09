"use client";
import { useState } from "react";
import ReviewStar from "./ReviewStar";
import { Label } from "./ui/label";


export default function InputStar({
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
  const [value, setValue] = useState(0);
  return (
    <div className={className}>
      <Label htmlFor={id} className="block text-xl font-medium">
        {label}
      </Label>
      <p className="text-sm text-gray-300">{discription}</p>
      <input
        id={id}
        name={id}
        className="hidden"
        type="range"
        min={0}
        max={5}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <ReviewStar
        rating={value}
        onClick={(i) => setValue(i)}
        size={30}
        className="justify-start my-2"
      />
    </div>
  );
}
