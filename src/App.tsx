import { useState } from "react";

import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";

import './index.css';

const App = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>    
  )
}

export default App;
