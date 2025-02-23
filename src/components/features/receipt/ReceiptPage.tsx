import { useParams } from "react-router";
import { useGetReceiptQuery } from "../../../api/receipt-api.ts";
import { ReceiptPercentIcon } from "@heroicons/react/24/solid";
import ReceiptItem from "./components/ReceiptItem.tsx";
import ReceiptTotals from "./components/ReceiptTotal.tsx";
import PageHeader from "../../shared/PageHeader.tsx";
import logo from "../../../assets/byte-me-truck-logo.webp";

const ReceiptPage = () => {
  const {orderId} = useParams();
  const {data: receiptData, error, isLoading} = useGetReceiptQuery(orderId!);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background-accent text-prominent-light">
      <PageHeader title="Tillbaka till Meny" icon={ReceiptPercentIcon}/>

      <div className="w-full px-6 py-6 bg-navbar border border-primary-border rounded-lg shadow-md text-center">
        {isLoading ? (
          <p className="text-lg">Laddar kvitto...</p>
        ) : error ? (
          <p className="text-lg text-red-500">Det gick inte att ladda kvittot.</p>
        ) : receiptData?.receipt ? (
          <article>
            <div className="flex justify-center mb-4">
              <img src={logo} alt="Byte Me Truck Logo" className="w-16 h-16 rounded-2xl"/>
            </div>

            <h1 className="text-3xl font-bold text-cart-button">KVITTO</h1>
            <p className="text-lg mt-1">Order ID: <strong>{receiptData.receipt.id}</strong></p>

            <div className="mt-6 space-y-4">
              {receiptData.receipt.items.map((item) => (
                <ReceiptItem key={item.id} name={item.name} totalCost={item.price} quantity={item.quantity}/>
              ))}
            </div>

            <ReceiptTotals total={receiptData.receipt.orderValue}/>
          </article>
        ) : (
          <p className="text-lg text-red-500">Kvittodetaljer saknas!</p>
        )}
      </div>
    </div>
  );
}

export default ReceiptPage;
