"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import ReviewCard from "./Card/Reviewcard";
import InputStar from "./InputStar";
import InputThumbUpDown from "./InputThumbUpDown";
import { Button } from "./ui/button";
export default function Review() {
  const [open, setOpen] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { toast } = useToast();
  useEffect(() => {
    setSubmited(false);
    if (submited) {
      toast({
        title: "Thank you for your review!",
        description: "Your review has been submited successfully.",
      });
      if (typeof window === "undefined") return;
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      setReviews(reviews);
    }
  }, [submited, toast]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
    setReviews(reviews);
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          What our customers are saying
        </h2>

        <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          {reviews.map((review: any, i) => (
            <ReviewCard
              key={i}
              name={review.name}
              img={review.image}
              rating={review.rating}
              review={review.review}
              date={review.date}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <AddReviewSection
            value={open}
            onChange={setOpen}
            submited={setSubmited}
          />
        </div>
      </div>
    </section>
  );
}

function AddReviewSection({
  value,
  onChange,
  submited,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
  submited: (value: boolean) => void;
}) {
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // if (!window) return;
      const data = new FormData(e.currentTarget);
      const review = {
        name: data.get("name"),
        safety: data.get("safety"),
        communication: data.get("communication"),
        recommend: data.get("recommend"),
        message: data.get("message"),
      };
      console.log(review);
      const newReview = {
        name: review.name,
        image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
        rating: (Number(review.safety) + Number(review.communication)) / 2,
        review: review.message,
        date: new Date().toLocaleDateString(),
      };
      const reviews = JSON.parse(localStorage.getItem("reviews") || "[]");
      reviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(reviews));
      e.currentTarget.reset();
      submited(true);
      onChange(false);
    },
    [onChange, submited]
  );

  return (
    <Dialog open={value} onOpenChange={onChange}>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-white ring-1 ring-green-600 hover:ring-green-700 shadow-md hover:shadow-lg transition-all ease-in-out duration-200">
          <Plus className="hidden sm:inline-block" size={24} />
          Add review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <ScrollArea className="max-h-[calc(85vh-4rem-1px)] pe-4 py-4">
          <form onSubmit={onSubmit}>
            <DialogHeader>
              <DialogTitle className="text-lg md:text-3xl">
                Leave a review
              </DialogTitle>
              <DialogDescription>
                Your feedback matter to us. Share your experience with us.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <InputStar
                label="Safety"
                discription="How safe did you feel?"
                id="safety"
                className="mb-4"
              />
              <InputStar
                label="Communication"
                discription="How was the communication?"
                id="communication"
              />
              <InputThumbUpDown
                label="Would you recommend us?"
                discription="Would you recommend us to your friends and family?"
                id="recommend"
                className="mt-4"
              />
              <div className="my-4 p-px">
                <label htmlFor="name">Your name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid w-full gap-1.5 my-4 p-px">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  className="resize-none"
                  name="message"
                  required
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                className="bg-green-700 hover:bg-green-600 text-white ring-1 ring-green-700 hover:ring-green-600 shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
                type="submit"
              >
                <Plus className="hidden sm:inline-block" size={24} />
                Add review
              </Button>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
