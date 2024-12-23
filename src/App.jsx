import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Plan from "./components/Plan";
import Cart from "./pages/Cart";
// import Product_List from "./components/Product_List";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/products" element={<Product_List />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
  
    </main>
  );
}

export default App;
