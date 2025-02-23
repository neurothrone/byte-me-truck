import { BrowserRouter as Router, Routes, Route } from "react-router";
import MenuPage from "../components/features/menu/MenuPage.tsx";
import CartPage from "../components/features/cart/CartPage.tsx";
import OrderPage from "../components/features/order/OrderPage.tsx";
import ReceiptPage from "../components/features/receipt/ReceiptPage.tsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/orders/:orderId" element={<OrderPage/>}/>
        <Route path="/receipts/:orderId" element={<ReceiptPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
