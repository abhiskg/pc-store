import { IProduct } from "@/backend/interfaces/productType";
import { addComponent } from "@/redux/features/pcBuilderSlice";
import { useAppDispatch } from "@/redux/hook";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function ComponentCard({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();

  const router = useRouter();
  return (
    <Card className="flex justify-between gap-10 max-w-2xl mx-auto">
      <div className="h-40 w-40  relative">
        <Image src={product.image} alt="dad" fill className="w-full" />
      </div>

      <div className="p-4 flex-1">
        <div className="text-sm bg-gray-500 inline-block text-gray-50 px-1 py-px rounded ">
          {product.category}
        </div>
        <h1 className=" text-lg font-semibold ">{product.name}</h1>
        <div className="mt-2 ">
          <div className="flex gap-1 my-1">
            {[...Array(product.ratings)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500" />
            ))}
          </div>
          <div className="mt-1">Status: {product.status}</div>
          <div className="mt-2">Price: {product.price}</div>
        </div>
      </div>
      <Button
        className="whitespace-nowrap my-auto"
        onClick={() => {
          dispatch(addComponent(product));
          router.push("/pc-builder");
        }}
      >
        Add to builder
      </Button>
    </Card>
  );
}

export default ComponentCard;
