import { IProduct } from "@/backend/interfaces/productType";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex justify-between">
          <div className="text-sm bg-gray-500 text-gray-50 px-1 py-px rounded ">
            {product.category}
          </div>
          <div className="font-semibold mt-1 text-sm">{product.status}</div>
        </div>
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <div className="flex gap-1 my-1">
          {[...Array(product.ratings)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-500" />
          ))}
        </div>
        <div className="font-semibold mt-1">Price:{product.price}</div>
        <Button className="w-full mt-3" asChild>
          <Link href={`/products/${product._id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
