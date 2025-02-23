import clsx from "clsx";
import BaseButton from "./BaseButton";
import { PropsWithChildren } from "react";

interface PrimaryButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const PrimaryButton = ({children, ...props}: PrimaryButtonProps) => {
  return (
    <BaseButton
      {...props}
      className={clsx(
        "bg-primary hover:bg-primary-hover active:bg-primary-active text-black",
        props.className
      )}
    >
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
