import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductsScreen from "./screens/ProductsScreen.jsx";
import CartScreen from "./screens/CartScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import Footer from "./components/Footer.jsx";
import LandingScreen from "./screens/LandingScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegistrationScreen from "./screens/RegistrationScreen.jsx";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import CheckoutScreen from "./screens/CheckoutScreen.jsx";
import YourOrdersScreen from "./screens/YourOrdersScreen.jsx";
import AdminConsoleScreen from "./screens/AdminConsoleScreen.jsx";
import OrderSuccessScreen from "./screens/OrderSuccessScreen.jsx";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />}></Route>
            <Route path="/products" element={<ProductsScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route
              path="/registration"
              element={<RegistrationScreen />}
            ></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/checkout" element={<CheckoutScreen />}></Route>
            <Route path="/your-orders" element={<YourOrdersScreen />}></Route>
            <Route
              path="/admin-console"
              element={<AdminConsoleScreen />}
            ></Route>
            <Route
              path="/order-success"
              element={<OrderSuccessScreen />}
            ></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
