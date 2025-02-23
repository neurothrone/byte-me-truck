import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store.ts";
import { CartItem } from "../../../../types/cart.ts";
import CartItemCard from "./CartItemCard.tsx";
import TextMessage from "../../../shared/TextMessage.tsx";

interface CartListProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

const CartList = ({items, onRemoveItem}: CartListProps) => {
  const isLoading = useSelector((state: RootState) =>
    Object.values(state.api.mutations).some(
      (mutation) => mutation?.endpointName === "placeOrder" && mutation.status === "pending"
    )
  );

  return (
    <div className="pb-36 flex-grow overflow-y-auto space-y-4">
      {items.length === 0 ? (
        <TextMessage
          className="text-center text-prominent-light"
          text="Din kundvagn är tom."
        />
      ) : (
        items.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            isDisabled={isLoading}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))
      )}
    </div>
  );
};

export default CartList;
