interface ReceiptItemProps {
  name: string;
  totalCost: number;
  quantity: number;
}

const ReceiptItem = ({name, totalCost, quantity}: ReceiptItemProps) => {
  return (
    <div className="pb-2 flex flex-col ">
      <div className="pb-1 flex justify-between items-center text-lg border-b-2 border-dashed border-primary-border">
        <span>{name}</span>
        <span>{totalCost} SEK</span>
      </div>

      <p className="text-sm text-muted-white text-left pt-1.5">x{quantity}</p>
    </div>
  );
}

export default ReceiptItem;
