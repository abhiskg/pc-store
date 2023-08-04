import { IProduct } from "@/backend/interfaces/productType";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { Star } from "lucide-react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";

const ProductDetails = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(product);
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src={product.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">
              {product.category}
            </h2>
            <h1 className="my-2 text-2xl font-semibold text-black">
              {product.name}
            </h1>
            <div className="my-2 flex items-center">
              <span className="flex items-center space-x-1">
                {[...Array(product.ratings)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" />
                ))}
                <span className="ml-3 inline-block text-xs font-semibold">
                  {product.ratings} Ratings
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="mt-2 font-medium">
              {product.features.brand && (
                <div>Brand: {product.features.brand}</div>
              )}
              {product.features.model && (
                <div>Model: {product.features.model}</div>
              )}
              {product.features.specification && (
                <div>Specification: {product.features.specification}</div>
              )}
              {product.features.type && (
                <div>Type: {product.features.type}</div>
              )}
              {product.features.voltage && (
                <div>Voltage: {product.features.voltage}</div>
              )}
              <div className="mt-2">Status: {product.status}</div>
            </div>
            <div className="mb-4 mt-3 font-medium flex gap-3 border-b-2 border-gray-100 pb-5">
              <div>Individual Rating: {product.individualRating}</div>
              <div>Average Rating: {product.averageRating}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-gray-900">
                ₹{product.price}
              </span>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios(`${process.env.URL}/api/products?home=true`);
  const products = data.data as IProduct[];

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  product: IProduct;
}> = async ({ params }) => {
  if (!params || !params.productId) {
    return {
      notFound: true,
    };
  }
  const { data } = await axios(
    `${process.env.URL}/api/products/${params.productId}`
  );

  return {
    props: {
      product: data.data,
    },
  };
};
