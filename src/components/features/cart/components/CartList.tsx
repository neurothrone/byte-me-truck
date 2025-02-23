import CartItemCard from "./CartItemCard.tsx";
import { CartItem } from "../../../../types/cart.ts";
import TextMessage from "../../../shared/TextMessage.tsx";

interface CartListProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

const CartList = ({items, onRemoveItem}: CartListProps) => {
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
            onRemove={() => onRemoveItem(item.id)}
          />
        ))
      )}
    </div>
  );
}

export default CartList;
