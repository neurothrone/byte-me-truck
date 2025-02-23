import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../redux/cart-slice.ts";
import { MenuItem } from "../../../../types/menu.ts";
import { RootState } from "../../../../redux/store.ts";
import { Badge } from "@byte-me-truck/badge";
import { PrimaryButton } from "@byte-me-truck/button";
import { PlusIcon } from "@heroicons/react/24/solid";

interface DrinksSectionProps {
  drinks: MenuItem[];
}

const DrinksSection = ({drinks}: DrinksSectionProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="space-y-4">
      {drinks.map((drink) => {
        const quantity = cartItems.find((item) => item.id === drink.id)?.quantity || 0;
        return (
          <div key={drink.id} className="p-3 relative flex justify-between items-center bg-white rounded-lg shadow-sm">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">{drink.name}</p>
              <p className="text-sm text-gray-600">{drink.price} SEK</p> {/* ✅ Price added below name */}
            </div>

            <Badge count={quantity}/>

            <PrimaryButton
              className="px-3 py-1 bg-primary hover:bg-primary-hover active:bg-primary-active text-black font-bold rounded-lg transition"
              onClick={() => dispatch(addItem(drink))}
            >
              <PlusIcon className="w-6 h-6 text-black"/>
            </PrimaryButton>
          </div>
        );
      })}
    </div>
  );
};

export default DrinksSection;
