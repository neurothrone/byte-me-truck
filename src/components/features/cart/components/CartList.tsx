import CartItemCard from "./CartItemCard.tsx";
import { CartItem } from "../../../../types/cart.ts";

interface CartListProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

const CartList = ({items, onRemoveItem}: CartListProps) => {
  return (
    <div className="pb-36 flex-grow overflow-y-auto space-y-4">
      {items.length === 0 ? (
        <p className="text-center text-lg text-prominent-light">Din kundvagn är tom.</p>
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
