import { UtilityType } from "../constants";
import { twMerge } from "tailwind-merge";

export default function FlexContainer({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge("flex flex-col items-center justify-start", className)}
    >
      {children}
    </div>
  );
}
