import { DestructiveButton } from "@byte-me-truck/button";
import { CartItem } from "../../../../types/cart.ts";

interface CartItemProps {
  item: CartItem;
  isDisabled?: boolean;
  onRemove: () => void;
}

const CartItemCard = ({item, isDisabled, onRemove}: CartItemProps) => {
  return (
    <div className="p-4 flex justify-between items-center bg-prominent-light rounded-lg shadow-md">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="mb-1 text-sm text-gray-600">{item.quantity} × {item.price} SEK</p>
        <p className="text-sm font-bold">{item.quantity * item.price} SEK</p>
      </div>
      <DestructiveButton
        className="px-3 py-2"
        disabled={isDisabled}
        onClick={onRemove}
      >
        Ta bort
      </DestructiveButton>
    </div>
  );
};

export default CartItemCard;
