import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { removeItem, clearCart } from "../../../redux/cart-slice.ts";
import { useNavigate } from "react-router";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { usePlaceOrderMutation } from "../../../api/order-api.ts";
import PageHeader from "../../shared/PageHeader.tsx";
import CartList from "./components/CartList.tsx";
import CartTotal from "./components/CartTotal.tsx";
import TextMessage from "../../shared/TextMessage.tsx";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placeOrder, {isLoading}] = usePlaceOrderMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (cart.length === 0)
      return;

    try {
      // throw new Error("Simulate error");
      setErrorMessage(null);

      const expandedItems = cart.flatMap((item) => Array(item.quantity).fill(item.id));
      const orderResponse = await placeOrder({items: expandedItems}).unwrap();

      dispatch(clearCart());
      navigate(`/orders/${orderResponse.order.id}`);
    } catch {
      setErrorMessage("Något gick fel vid beställningen. Försök igen.");
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col bg-gradient-to-b from-background to-background-accent">
      <PageHeader title="Tillbaka till Meny" icon={ShoppingCartIcon}/>

      {errorMessage && <TextMessage className="text-center text-red-500 mb-4" text={errorMessage}/>}

      <CartList items={cart} onRemoveItem={(id) => dispatch(removeItem(id))}/>

      <CartTotal
        isLoading={isLoading}
        totalPrice={cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        onClearCart={() => dispatch(clearCart())}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default CartPage;
