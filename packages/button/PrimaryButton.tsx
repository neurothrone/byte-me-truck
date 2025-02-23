import { PropsWithChildren } from "react";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

interface PrimaryButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton = ({
                         children,
                         onClick,
                         className,
                         disabled = false,
                         isLoading = false
                       }: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      className={clsx(
        "p-2 flex items-center justify-center bg-primary hover:bg-primary-hover active:bg-primary-active text-black font-bold rounded-lg text-sm transition duration-200",
        {
          "opacity-50 cursor-not-allowed": disabled || isLoading,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading && <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin"/>}
      {children}
    </button>
  );
};

export default PrimaryButton;
