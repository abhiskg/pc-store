import { ICategory } from "@/backend/interfaces/categoryType";
import { IProduct } from "@/backend/interfaces/productType";
import ProductCard from "@/components/card/productCard";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";

function ProductCategory({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1s gap-3 mt-10 ">
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default ProductCategory;

ProductCategory.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/categories`);
  const categories = data.data as ICategory[];

  const paths = categories.map((category) => ({
    params: { categoryName: category.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  products: IProduct[];
}> = async ({ params }) => {
  if (!params || !params.categoryName) {
    return {
      notFound: true,
    };
  }
  const { data } = await axios(
    `${process.env.URL}/api/products?category=${params.categoryName}`
  );

  return {
    props: {
      products: data.data,
    },
  };
};
