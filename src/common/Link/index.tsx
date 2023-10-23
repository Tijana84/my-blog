import { Button } from "antd";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
  isReadMore?: string;
};

export const Link = ({ className, disabled, onClick, children }: Props) => {
  return (
    <Button
      className={twMerge(
        "!text-white font-serif",
        disabled ? "" : "",
        className
      )}
      onClick={onClick}
      type="link"
    >
      {children}
    </Button>
  );
};
