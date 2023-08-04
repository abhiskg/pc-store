import { IProduct } from "@/backend/interfaces/productType";
import ComponentCard from "@/components/card/componentCard";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";

function PcBuilderComponent({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className=" my-10">
      <div className="space-y-3">
        {products.map((product) => (
          <ComponentCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default PcBuilderComponent;

PcBuilderComponent.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<{
  products: IProduct[];
}> = async ({ params }) => {
  if (!params || !params.categoryName) {
    return {
      notFound: true,
    };
  }
  const { data } = await axios.get(
    `${process.env.URL}/api/products?category=${params.categoryName}`
  );

  return {
    props: {
      products: data.data,
    },
  };
};
