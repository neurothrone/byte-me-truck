import { useParams } from "react-router";
import { useGetOrderByIdQuery } from "../../../api/order-api.ts";
import { ClockIcon } from "@heroicons/react/24/solid";
import PageHeader from "../../shared/PageHeader.tsx";
import OrderStatus from "./components/OrderStatus.tsx";
import OrderFooter from "./components/OrderFooter.tsx";
import TextMessage from "../../shared/TextMessage.tsx";

const OrderPage = () => {
  const {orderId} = useParams();
  const {data: orderData, error, isLoading} = useGetOrderByIdQuery(orderId!);

  return (
    <div
      className="min-h-screen p-6 flex flex-col bg-gradient-to-b from-background to-background-accent text-prominent-light">
      <PageHeader title="Tillbaka till Meny" icon={ClockIcon}/>

      <div
        className="w-full px-6 py-6 mb-20 bg-tertiary-background border border-primary-border rounded-lg shadow-md text-center">
        {isLoading ? (
          <TextMessage text="Laddar orderinformation..."/>
        ) : error ? (
          <TextMessage
            className="text-red-500"
            text="Det gick inte att läsa in orderinformation."
          />
        ) : orderData?.order ? (
          <OrderStatus eta={orderData.order.eta} orderId={orderData.order.id}/>
        ) : (
          <TextMessage
            className="text-red-500"
            text="Orderinformation saknas!"
          />
        )}
      </div>

      <OrderFooter orderId={orderData?.order?.id}/>
    </div>
  );
}

export default OrderPage;
