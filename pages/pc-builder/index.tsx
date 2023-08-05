import { ICategory } from "@/backend/interfaces/categoryType";
import CategoryCard from "@/components/card/categoryCard";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hook";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import { toast } from "react-hot-toast";

const PcBuilderPage = ({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { componentCount } = useAppSelector((state) => state.pcBuilder);
  return (
    <div>
      <div className="space-y-2  mt-5">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Button
          disabled={componentCount < 5}
          onClick={() => toast.success("Build Complete")}
        >
          Complete Build
        </Button>
      </div>
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
