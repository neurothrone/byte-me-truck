import clsx from "clsx";
import BaseButton from "./BaseButton";
import { PropsWithChildren } from "react";

interface DestructiveButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const DestructiveButton = ({children, ...props}: DestructiveButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={clsx(
        "bg-spicy-red hover:bg-spicy-red-hover active:bg-spicy-red-active text-white",
        props.className
      )}
    >
      {children}
    </BaseButton>
  );
};

export default DestructiveButton;
