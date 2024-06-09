import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
export default function ReviewStar({
  rating = 5,
  onClick,
  size = 16,
  className
}: {
  rating?: number;
  onClick?: (rating: number) => void;
  size?: number;
  className?: string;
}) {
  const ratingValue = rating;
  return (
    <div className={cn("flex justify-center gap-1 text-green-500", className)}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          className="transition-all ease-in-out duration-200 cursor-pointer hover:text-green-600"
          onClick={onClick ? () => onClick(i + 1) : undefined}
          {...(i+1 > ratingValue ? {} : { fill: "#22c55e" })}
        />
      ))}
    </div>
  );
}
