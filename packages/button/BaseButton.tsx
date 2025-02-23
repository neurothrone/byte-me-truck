import { PropsWithChildren } from "react";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

interface BaseButtonProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const BaseButton = ({
                      children,
                      onClick,
                      className,
                      disabled = false,
                      isLoading = false
                    }: PropsWithChildren<BaseButtonProps>) => {
  return (
    <button
      className={clsx(
        "p-2 flex items-center justify-center font-bold rounded-lg text-sm transition duration-200",
        {
          "opacity-50 cursor-not-allowed": disabled || isLoading,
        },
        className
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin"/>}
      {children}
    </button>
  );
};

export default BaseButton;
