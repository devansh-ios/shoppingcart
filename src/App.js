import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product";
import Cart from "./Component/Cart/Cart";
 

function App() {



  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
