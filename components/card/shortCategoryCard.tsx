import { ICategory } from "@/backend/interfaces/categoryType";
import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

function ShortCategoryCard({ category }: { category: ICategory }) {
  return (
    <Link href={`/categories/${category.name}`}>
      <Card className="p-4 flex flex-col justify-center items-center">
        <Image src={category.image} height={100} width={100} alt="dscsd" />
        <div className="text-center font-medium mt-2">{category.name}</div>
      </Card>
    </Link>
  );
}

export default ShortCategoryCard;
