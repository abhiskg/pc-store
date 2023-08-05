import { ICategory } from "@/backend/interfaces/categoryType";
import { IProduct } from "@/backend/interfaces/productType";
import ProductCard from "@/components/card/productCard";
import ShortCategoryCard from "@/components/card/shortCategoryCard";
import Layout from "@/components/layout/layout";
import HeroSection from "@/components/sections/home/hero";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";

const HomePage = ({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <HeroSection />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>

      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3 mt-10 mb-5">
        {categories.map((category) => (
          <ShortCategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps<{
  products: IProduct[];
  categories: ICategory[];
}> = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //       categories: [],
  //     },
  //   };
  // }
  const productData = await axios.get(
    `${process.env.URL}/api/products?home=true`
  );
  const categoryData = await axios.get(`${process.env.URL}/api/categories`);

  const products = productData.data;
  const categories = categoryData.data;

  return {
    props: {
      products: products.data,
      categories: categories.data,
    },
  };
};
