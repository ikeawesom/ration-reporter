import { DayType } from "../constants";
import DefaultCard from "./utils/DefaultCard";
import { twMerge } from "tailwind-merge";

export default function DailyDates({
  className,
  parentClassName,
  date,
  change,
}: {
  className?: string;
  parentClassName?: string;
  date: DayType;
  change: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className={twMerge("grid place-items-center w-full", parentClassName)}>
      <DefaultCard
        className={twMerge(
          "flex items-center justify-center gap-3 max-[450px]:flex-wrap",
          className
        )}
      >
        <h1 className="text-lg font-bold">Monday's Date</h1>
        <form className="w-full flex max-[300px]:flex-wrap items-center justify-start gap-3">
          <select onChange={change} value={date.day} name="day">
            {new Array(31).fill(1).map((_value: number, index: number) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select onChange={change} value={date.month} name="month">
            {new Array(12).fill(1).map((_value: number, index: number) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <select onChange={change} value={date.year} name="year">
            {new Array(10).fill(1).map((_value: number, index: number) => (
              <option key={index} value={index + 2024}>
                {index + 2024}
              </option>
            ))}
          </select>
        </form>
      </DefaultCard>
    </div>
  );
}
