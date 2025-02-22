import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";
import { Badge } from "@byte-me-truck/badge";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import logo from "../../../assets/byte-me-truck-logo.webp";

const StickyNavbar = () => {
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 bg-navbar shadow-md py-4 px-6 flex justify-between items-center max-w-3xl mx-auto rounded-b-lg z-50">
      <img src={logo} alt="Byte Me Truck Logo" className="w-12 h-12 rounded-lg"/>

      <Link
        to="/cart"
        className="relative bg-cart-button hover:bg-cart-hover active:bg-cart-active p-3 rounded-lg shadow-md transition"
      >
        <ShoppingCartIcon className="w-6 h-6 text-black"/>
        <Badge count={cartCount}/>
      </Link>
    </div>
  );
}

export default StickyNavbar;
