import { DestructiveButton, PrimaryButton } from "@byte-me-truck/button";

interface CartTotalProps {
  totalPrice: number;
  isLoading: boolean;
  onClearCart: () => void;
  onCheckout: () => void;
}

const CartTotal = ({totalPrice, isLoading, onClearCart, onCheckout}: CartTotalProps) => {
  return (
    <div
      className="fixed bottom-0 inset-x-0 bg-secondary-background shadow-lg border-t-2 border-primary-border rounded-t-4xl">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex justify-between text-lg font-bold text-prominent-light">
          <p>Totalt</p>
          <p>{totalPrice > 0 ? `${totalPrice} SEK` : "0 SEK"}</p>
        </div>

        <hr className="my-4 border-t-2 border-dashed border-primary-border"/>

        <div className="flex gap-4">
          <DestructiveButton
            className="py-3 w-full"
            disabled={isLoading}
            onClick={onClearCart}
          >
            Töm kundvagnen
          </DestructiveButton>

          <PrimaryButton
            className="w-full py-3"
            isLoading={isLoading}
            disabled={isLoading}
            onClick={onCheckout}
          >
            {isLoading ? "Behandlar din order..." : "TAKE MY MONEY!"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
