import { IProduct } from "@/backend/interfaces/productType";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function ComponentCard({ product }: { product: IProduct }) {
  return (
    <Card className="flex justify-between gap-10 max-w-xl mx-auto">
      <div className="aspect-square w-full  relative">
        <Image src={product.image} alt="dad" fill className="w-full" />
      </div>

      <div className="p-4 flex-1">
        <h1 className=" text-lg font-semibold ">{product.name}</h1>
        <div className="mt-2 ">
          <div className="mt-2">Status: {product.status}</div>
          <div className="mt-2">Price: {product.price}</div>
        </div>
      </div>
      <Button className="whitespace-nowrap my-auto">Add to builder</Button>
    </Card>
  );
}

export default ComponentCard;
