interface ReceiptTotalsProps {
  total: number;
}

const ReceiptTotals = ({total}: ReceiptTotalsProps) => {
  return (
    <div className="mt-6 w-full border-t-2 border-primary-border py-4">
      <div className="flex justify-between">
        <div>
          <p className="text-lg font-bold text-left">TOTALT</p>
          <p className="text-sm text-muted-white text-left">inkl 20% moms</p>
        </div>
        <p className="text-2xl font-bold">{total} SEK</p>
      </div>
    </div>
  );
}

export default ReceiptTotals;
