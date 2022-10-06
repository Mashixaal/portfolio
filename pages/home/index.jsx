import Layout from "@src/components/layouts/layout";
import Content from "./content";

const HomePage = () => {
  return (
    <>
    <Layout children={<Content />} />
    </>
  );
};

export default HomePage;
