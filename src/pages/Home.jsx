import ProductsComponent from "../components/Home/products";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ProductsComponent/>
      <Footer />
    </>
  );
};

export default Home;
