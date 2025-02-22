import { PropsWithChildren } from "react";

interface PrimaryButtonProps {
  onClick: () => void;
}

const PrimaryButton = ({children, onClick}: PropsWithChildren<PrimaryButtonProps>) => {
  return (
    <button
      className="relative mt-3 w-full bg-primary hover:bg-primary-hover active:bg-primary-active text-black font-bold py-1 rounded-lg text-sm transition duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
