import { IProduct } from "@/backend/interfaces/productType";
import Image from "next/image";
import { Button } from "../ui/button";

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className=" rounded-md border">
      <div className="relative  h-60 rounded">
        <Image
          src={product.image}
          alt="HII"
          className="w-full  object-cover rounded"
          fill
        />
      </div>
      <div className="px-4 py-1">
        <div className="text-sm">{product.category}</div>
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <div className="font-semibold mt-1">Price:{product.price}</div>
        <div className="font-semibold mt-1">Status:{product.status}</div>
        <Button className="w-full mt-3">Read More</Button>
      </div>
    </div>
  );
}

export default ProductCard;
