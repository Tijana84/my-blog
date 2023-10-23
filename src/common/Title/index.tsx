import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  title?: string;
};

export const Title = ({ className, title }: Props) => {
  return (
    <div className={twMerge("text-xl text-white font-serif", className)}>
      <h1>{title}</h1>
    </div>
  );
};
