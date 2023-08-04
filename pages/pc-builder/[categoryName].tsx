import { ICategory } from "@/backend/interfaces/categoryType";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";

function PcBuilderComponent({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(categories);
  return <div>PcBuilderComponent</div>;
}

export default PcBuilderComponent;

PcBuilderComponent.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<{
  categories: ICategory[];
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
      categories: data.data,
    },
  };
};
