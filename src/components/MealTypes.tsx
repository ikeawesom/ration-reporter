import React from "react";
import { DefaultRationQty } from "../constants";
import SecondaryButton from "./utils/SecondaryButton";
import { useReportContext } from "./contexts/ReportContext";
import FlexContainer from "../utils/FlexContainer";

export default function MealTypes({
  day,
  meal,
}: {
  day: string;
  meal: string;
}) {
  const { handleChange, report, handleQuantityChange, handleToggleOR } =
    useReportContext();

  if (report !== null) {
    const isOR = report[day][meal].or;
    return (
      <FlexContainer className="flex-1 gap-y-2 self-start">
        <SecondaryButton
          className="text-sm"
          activated={report[day][meal].state}
          onClick={() => handleChange(day, meal)}
        >
          {meal}
        </SecondaryButton>
        {report[day][meal].state && (
          <FlexContainer className="items-start justify-start gap-2 w-full">
            <SecondaryButton
              activated={isOR}
              onClick={() => handleToggleOR(day, meal)}
            >
              Outration
            </SecondaryButton>
            {isOR &&
              Object.keys(DefaultRationQty).map(
                (rationType: string, index: number) => {
                  return (
                    <div
                      className="w-full flex flex-col items-center justify-center gap-2"
                      key={index}
                    >
                      <label
                        htmlFor={rationType}
                        className="text-sm text-slate-800 text-center"
                      >
                        {rationType}
                      </label>
                      <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleQuantityChange(e, day, meal, rationType)
                        }
                        className="shadow-sm px-2 py-1 border-[1px] border-slate-200 rounded-md w-full"
                        id={rationType}
                        type="number"
                        value={report[day][meal].qty[rationType]}
                      />
                    </div>
                  );
                }
              )}
          </FlexContainer>
        )}
      </FlexContainer>
    );
  }
}
