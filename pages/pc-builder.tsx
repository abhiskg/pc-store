import { ICategory } from "@/backend/interfaces/categoryType";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";

const PcBuilderPage = ({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(categories);
  return <div>PcBuilderPage</div>;
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps<{
  categories: ICategory[];
}> = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/categories`);

  return {
    props: {
      categories: data.data,
    },
  };
};
