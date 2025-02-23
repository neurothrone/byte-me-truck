import { MenuItem } from "../../../../types/menu.ts";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../redux/cart-slice.ts";
import { RootState } from "../../../../redux/store.ts";
import { PrimaryButton } from "@byte-me-truck/button";
import { Badge } from "@byte-me-truck/badge";

interface WontonCardProps {
  item: MenuItem;
}

const WontonCard = ({item}: WontonCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const quantity = cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 0;

  return (
    <div className="px-6 py-4 relative bg-white rounded-lg shadow-md border border-gray-200">
      <Badge count={quantity}/>

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold uppercase text-black">{item.name}</h2>
        <p className="text-lg font-bold text-gray-900">{item.price} SEK</p>
      </div>

      <hr className="my-2 border-dashed border-gray-400"/>

      {item.ingredients && (
        <p className="text-sm text-gray-600 lowercase">{item.ingredients.join(", ")}</p>
      )}

      <PrimaryButton
        className="mt-3 relative w-full"
        onClick={() => dispatch(addItem(item))}
      >
        Lägg till
      </PrimaryButton>
    </div>
  );
}

export default WontonCard;
