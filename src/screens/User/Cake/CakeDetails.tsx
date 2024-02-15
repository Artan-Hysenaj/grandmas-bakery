import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { formatCommentTime } from "@/lib/formatCommentTime";
import { Minus, Plus, SendHorizontal } from "lucide-react";
import { useState } from "react";

const DUMMY_COMMENTS = [
  {
    user: "Alice Smith",
    timestamp: "2024-02-13",
    comment: "Great insight!",
  },
  {
    user: "David Johnson",
    timestamp: "2024-03-13",
    comment: "I agree with this point!",
  },
  {
    user: "Emily Brown",
    timestamp: "2023-02-13",
    comment: "Interesting perspective.",
  },
  {
    user: "Michael Wilson",
    timestamp: "2022-02-13",
    comment: "Well said!",
  },
  {
    user: "Sophia Martinez",
    timestamp: "2024-02-13",
    comment: "I appreciate this explanation.",
  },
];

const DUMMY_INGREDIENTS = [
  "2 cups all-purpose flour",
  "2 cups granulated sugar",
  "3/4 cup unsweetened cocoa powder",
  "2 teaspoons baking soda",
  "1 teaspoon baking powder",
  "1 teaspoon salt",
  "1 cup buttermilk",
  "1 cup strong black coffee (hot)",
  "1/2 cup vegetable oil",
  "2 large eggs",
  "2 teaspoons vanilla extract",
];

export const Component = function CakeDetails(): JSX.Element {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="flex w-full">
      <div className="w-full">
        <div className="max-w-md">
          <img src="https://via.placeholder.com/500" alt="" />
        </div>
        <div className="space-y-4 mt-6 w-full max-w-md">
          <h5 className="text-2xl font-bold">Comments</h5>
          <ScrollArea className="h-60 rounded-md border p-4">
            <ul className="space-y-1">
              {DUMMY_COMMENTS.map((comment, ind) => (
                <li key={comment.user + ind}>
                  <p className="text-slate-600 flex items-center gap-2">
                    <span className="font-bold text-xs text-[#424242]">
                      {comment.user}
                    </span>
                    <span className="inline-block w-1.5 h-1.5 my-auto rounded-full bg-[#A4A2A2]" />
                    <span className="text-xs text-[#A4A2A2]">
                      {formatCommentTime(comment.timestamp)}
                    </span>
                  </p>
                  <p className="text-sm text-[#424242]">{comment.comment}</p>
                </li>
              ))}
            </ul>
          </ScrollArea>
          <div className="flex items-center space-x-2">
            <Input type="email" placeholder="Comment" />
            <Button type="submit">
              <SendHorizontal />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full space-y-4">
        <div className="space-y-2">
          <h2 className="text-5xl font-bold">Black Forest Cake</h2>
          <h5>Price per item 50 €</h5>
          <div
            className="flex gap-10 fixed left-0 bottom-0 bg-gray-300 w-full p-4 
          lg:static lg:left-auto lg:bottom-auto lg:bg-inherit lg:w-auto lg:p-0"
          >
            <span className="flex justify-between w-full max-w-40">
              <Button
                disabled={quantity === 1}
                size="icon"
                onClick={decreaseQuantity}
              >
                <Minus />
              </Button>
              <span className="text-2xl">{quantity}</span>
              <Button size="icon" onClick={increaseQuantity}>
                <Plus />
              </Button>
            </span>
            <Button onClick={increaseQuantity}>Add For 150 €</Button>
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="text-4xl font-bold">Ingredients</h2>
          <ul>
            {DUMMY_INGREDIENTS.map((ing) => (
              <li key={ing} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-slate-600" />
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div>
          <h2 className="text-4xl font-bold">Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            cupiditate. Illum quam unde quibusdam consequatur animi, facere
            placeat eaque aliquam debitis illo, quo qui nam enim vero expedita
            magnam pariatur, rerum aut voluptates neque dicta impedit. Minus
            laudantium praesentium incidunt? Ex nemo laudantium nam nihil saepe
            assumenda quo eaque adipisci, temporibus ad. Perferendis incidunt
            iusto eum dolor mollitia cupiditate iste nostrum illum quo, porro
            sapiente accusantium maxime dolorum doloremque id! A eum cumque
            minima, officia, ipsam suscipit ea corporis et vitae quaerat facere
            quibusdam voluptas ducimus corrupti rem eaque voluptatem totam hic
            vero culpa soluta mollitia? Tempora nihil eius totam facere tempore
            inventore voluptate amet error dignissimos ea neque, ipsa voluptas
            magni libero eveniet commodi corporis perspiciatis, sequi quo
            voluptatem sapiente assumenda quia. Sit, eaque corrupti! Molestiae
            velit maiores nobis quis beatae laborum voluptatibus tenetur,
            quaerat dolores libero perspiciatis impedit blanditiis culpa labore
            quia? Dolores officia fuga molestias quo eius!
          </p>
        </div>
      </div>
    </div>
  );
};
