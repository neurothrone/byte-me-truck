import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../../redux/cart-slice.ts";
import { MenuItem } from "../../../../types/menu.ts";
import { RootState } from "../../../../redux/store.ts";
import { Badge } from "@byte-me-truck/badge";
import { PrimaryButton } from "@byte-me-truck/button";

interface DipItemProps {
  dip: MenuItem;
}

const DipItem = ({dip}: DipItemProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const quantity = cartItems.find((item) => item.id === dip.id)?.quantity || 0;

  return (
    <PrimaryButton
      key={dip.id}
      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition ${
        quantity > 0 ? "bg-primary text-black" : "bg-secondary hover:bg-secondary-hover text-gray-800"
      }`}
      onClick={() => dispatch(addItem(dip))}
    >
      {dip.name}
      <Badge count={quantity}/>
    </PrimaryButton>
  );
};

export default DipItem;
