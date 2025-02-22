import { PropsWithChildren } from "react";
import clsx from "clsx";

interface PrimaryButtonProps {
  onClick: () => void;
  className?: string;
}

const PrimaryButton = ({children, onClick, className}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      className={clsx(
        "p-2 bg-primary hover:bg-primary-hover active:bg-primary-active text-black font-bold rounded-lg text-sm transition duration-200",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
