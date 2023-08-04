import { ICategory } from "@/backend/interfaces/categoryType";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function CategoryCard({ category }: { category: ICategory }) {
  return (
    <Card className="p-5 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Image src={category.image} width={60} height={60} alt="jh" />
          <h2 className="text-sm font-medium">
            {category.name}{" "}
            <span className="bg-gray-500 text-gray-50 px-1 py-px rounded">
              Required
            </span>
          </h2>
        </div>
        <Button>Choose</Button>
      </div>
    </Card>
  );
}

export default CategoryCard;
