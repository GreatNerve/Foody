import Image from "next/image";
import ReviewStar from "../ReviewStar";
export default function ReviewCard({
    img = "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    name = "Paul Starr",
    review = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam magnam!",
    rating = 4,
    date = "2021-08-12",
}:{
    img?: string,
    name?: string,
    review?: string,
    rating?: number,
    date?: string
}) {
    return (
        <div className="mb-8 sm:break-inside-avoid">
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-4">
            <Image 
              src={img}
              alt={name}
              className="size-14 rounded-full object-cover"
              unoptimized width={124} height={124}
            />

            <div>
              <ReviewStar rating={4} />

              <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-700">
            {review}
          </p>
        </blockquote>
      </div>
    );
}
