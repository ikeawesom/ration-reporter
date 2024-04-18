import { DayType, MEALS } from "../constants";
import MealTypes from "./MealTypes";
import DefaultCard from "./utils/DefaultCard";
import { useReportContext } from "./contexts/ReportContext";
import { twMerge } from "tailwind-merge";
import { getCurrentDateString } from "../utils/getCurrentDate";
import FlexContainer from "../utils/FlexContainer";
import DailySnacks from "./DailySnacks";

export default function DailyRation({
  className,
  parentClassName,
  monday,
}: {
  className?: string;
  parentClassName?: string;
  monday: DayType;
}) {
  const { report } = useReportContext();

  if (report !== null)
    return (
      <div
        className={twMerge("grid place-items-center w-full", parentClassName)}
      >
        <DefaultCard className={className}>
          <FlexContainer className="gap-6">
            {Object.keys(report).map((day: string, index: number) => {
              const dateString = getCurrentDateString(monday, index);

              return (
                <FlexContainer
                  className="w-full items-start justify-start gap-2"
                  key={day}
                >
                  <h1 className="font-bold text-xl">
                    {day} ({dateString})
                  </h1>
                  <div className="flex items-start justify-between w-full gap-2 flex-wrap">
                    {MEALS.map((meal: string, index: number) => {
                      return <MealTypes day={day} meal={meal} key={index} />;
                    })}
                  </div>
                  <hr className="h-[1px] rounded-full my-2 bg-gray-50/30 w-full" />
                  <DailySnacks day={day} />
                </FlexContainer>
              );
            })}
          </FlexContainer>
        </DefaultCard>
      </div>
    );
}
