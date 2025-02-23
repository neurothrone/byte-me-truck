import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../redux/cart-slice.ts";
import { MenuItem } from "../../../../types/menu.ts";
import { RootState } from "../../../../redux/store.ts";
import { Badge } from "@byte-me-truck/badge";
import TextMessage from "../../../shared/TextMessage.tsx";

interface DipsSectionProps {
  dips: MenuItem[];
}

const DipsSection = ({dips}: DipsSectionProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Get the price from the first dip (since they all have the same price)
  const dipPrice = dips.length > 0 ? dips[0].price : null;

  return (
    <div>
      {dipPrice !== null && (
        <TextMessage
          className="text-center text-sm text-gray-600 mb-6"
          text={`Alla dips: ${dipPrice} SEK`}
        />
      )}

      <div className="flex flex-wrap gap-2">
        {dips.map((dip) => {
          const quantity = cartItems.find((item) => item.id === dip.id)?.quantity || 0;
          return (
            <button
              key={dip.id}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition ${
                quantity > 0 ? "bg-primary text-black" : "bg-secondary hover:bg-secondary-hover text-gray-800"
              }`}
              onClick={() => dispatch(addItem(dip))}
            >
              {dip.name}
              <Badge count={quantity}/>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DipsSection;
