import Layout from "@/components/layout/layout";
import HeroSection from "@/components/sections/home/hero";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
