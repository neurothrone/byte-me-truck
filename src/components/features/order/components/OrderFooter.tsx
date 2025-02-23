import { useNavigate } from "react-router";
import { PrimaryButton } from "@byte-me-truck/button";

interface OrderFooterProps {
  orderId?: string;
}

const OrderFooter = ({orderId}: OrderFooterProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 inset-x-0 bg-secondary-background shadow-lg border-t-2 border-primary-border">
      <div className="mx-auto px-6 py-4 max-w-3xl">
        <PrimaryButton
          className="w-full py-3"
          onClick={() => orderId && navigate(`/receipts/${orderId}`)} // ✅ Now using navigate()
        >
          SE KVITTO
        </PrimaryButton>
      </div>
    </div>
  );
}

export default OrderFooter;
