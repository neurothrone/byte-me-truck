import clsx from "clsx";
import logo from "../../../../assets/byte-me-truck-logo.webp";

interface OrderLogoProps {
  className?: string;
}

const OrderLogo = ({className}: OrderLogoProps) => {
  return (
    <div className={clsx("flex justify-center", className)}>
      <img src={logo}
           alt="Byte Me Truck Logo"
           className="h-80 rounded-2xl"
      />
    </div>
  );
}

export default OrderLogo;
