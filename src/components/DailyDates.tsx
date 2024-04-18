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
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
          <input onChange={change} value={date.day} name="day" type="number" />
          <input
            onChange={change}
            value={date.month}
            name="month"
            type="number"
          />
          <input
            onChange={change}
            value={date.year}
            name="year"
            type="number"
          />
        </form>
      </DefaultCard>
    </div>
  );
}
