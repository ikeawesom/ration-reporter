import { UtilityType } from "../../constants";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full bg-white/90 rounded-md shadow-sm p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
