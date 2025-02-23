import clsx from "clsx";

interface TextMessageProps {
  text: string;
  className?: string;
}

const TextMessage = ({text, className}: TextMessageProps) => {
  return (
    <p className={clsx("text-lg", className)}>
      {text}
    </p>
  );
};

export default TextMessage;
