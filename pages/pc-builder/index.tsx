import { ICategory } from "@/backend/interfaces/categoryType";
import CategoryCard from "@/components/card/categoryCard";
import Layout from "@/components/layout/layout";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";

const PcBuilderPage = ({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="space-y-2  mt-5">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </div>
  );
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
