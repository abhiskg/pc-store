import { ICategory } from "@/backend/interfaces/categoryType";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function CategoryCard({ category }: { category: ICategory }) {
  const component = useAppSelector((state) => state.pcBuilder);
  return (
    <Card className="p-5 max-w-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-start">
          <Image src={category.image} width={60} height={60} alt="jh" />
          <h2 className="text-sm font-medium">
            {category.name}{" "}
            <span className="bg-gray-500 text-gray-50 px-1 py-px rounded">
              Required
            </span>
            {component[category.name] !== null && (
              <div className="mt-5 flex gap-2">
                <Image
                  src={component[category.name]?.image!}
                  height={60}
                  width={60}
                  alt="sds"
                />
                <div>
                  <div>{component[category.name]?.name}</div>
                  <div>{component[category.name]?.price}</div>
                </div>
              </div>
            )}
          </h2>
        </div>
        <Button>
          <Link href={`/pc-builder/${category.name}`}>Choose</Link>
        </Button>
      </div>
    </Card>
  );
}

export default CategoryCard;
