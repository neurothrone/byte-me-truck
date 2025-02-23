import OrderLogo from "./OrderLogo";

interface OrderStatusProps {
  eta: string;
  orderId: string;
}

const calculateETA = (etaTimestamp: string) => {
  const etaTime = new Date(etaTimestamp);
  const now = new Date();
  const diffInMinutes = Math.round((etaTime.getTime() - now.getTime()) / 60_000);
  return diffInMinutes > 0 ? diffInMinutes : 1;
};

const OrderStatus = ({eta, orderId}: OrderStatusProps) => {
  return (
    <article>
      <OrderLogo className="mb-4"/>

      <h1 className="text-3xl font-bold text-cart-button">DINA WONTONS TILLAGAS!</h1>
      <p className="mt-2 text-xl">ETA <strong>{calculateETA(eta)} MIN</strong></p>
      <p className="mt-2 text-sm text-prominent-light">ORDER ID: <strong>{orderId}</strong></p>
    </article>
  );
}

export default OrderStatus;
