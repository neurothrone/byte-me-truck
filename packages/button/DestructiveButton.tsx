import { PropsWithChildren } from "react";
import clsx from "clsx";

interface DestructiveButtonProps {
  onClick: () => void;
  className?: string;
}

const DestructiveButton = ({children, onClick, className}: PropsWithChildren<DestructiveButtonProps>) => {
  return (
    <button
      className={clsx(
        "p-2 bg-spicy-red hover:bg-spicy-red-hover active:bg-spicy-red-active text-white font-bold rounded-lg text-sm transition duration-200",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DestructiveButton;
