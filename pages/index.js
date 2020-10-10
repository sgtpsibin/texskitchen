import React, { useEffect } from "react";
import fire from "../configs/firebase";
import Header from "../components/common/Header";
import Topbar from "../components/common/Topbar";
import Hero from "../components/Homepage/Hero";
import Products from "../components/Homepage/Products";
const HomePage = props => {
  useEffect(() => {
    console.log(props.products);
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Products products={props.products} />
    </>
  );
};

export async function getServerSideProps() {
  const snapshot = await fire.firestore().collection("products").get();
  const products = snapshot.docs.map(d => d.data());
  return { props: { products } };
}
export default HomePage;
