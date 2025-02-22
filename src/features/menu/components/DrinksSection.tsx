import { useGetMenuQuery } from "../../../api/menu-api.ts";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/cart-slice.ts";
import { RootState } from "../../../redux/store.ts";
import { Badge } from "@byte-me-truck/badge";
import { PlusIcon } from "@heroicons/react/24/solid";

const DrinksSection = () => {
  const {data: menu} = useGetMenuQuery();
  const drinks = menu?.filter((item) => item.type === "drink") ?? [];
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="space-y-4">
      {drinks.map((drink) => {
        const quantity = cartItems.find((item) => item.id === drink.id)?.quantity || 0;
        return (
          <div key={drink.id}
               className="relative flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
            <p className="text-lg font-semibold">{drink.name}</p>

            <Badge count={quantity}/>

            <button
              className="bg-primary hover:bg-primary-hover active:bg-primary-active text-black font-bold px-3 py-1 rounded-lg transition"
              onClick={() => dispatch(addItem(drink))}
            >
              <PlusIcon className="w-6 h-6 text-black"/>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default DrinksSection;
