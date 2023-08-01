import Layout from "@/components/layout/layout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const PcBuilderPage: NextPageWithLayout = () => {
  return <div>PcBuilderPage</div>;
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
