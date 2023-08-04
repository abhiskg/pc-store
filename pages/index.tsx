import { IProduct } from "@/backend/interfaces/productType";
import ProductCard from "@/components/card/productCard";
import Layout from "@/components/layout/layout";
import HeroSection from "@/components/sections/home/hero";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";

const HomePage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <HeroSection />

      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
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
}> = async () => {
  const data = await axios.get(`${process.env.URL}/api/products?home=true`);
  const products = data.data;

  return {
    props: {
      products: products.data,
    },
  };
};
