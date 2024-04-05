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

  if (report !== null)
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
            {Object.keys(DefaultRationQty).map(
              (rationType: string, index: number) => {
                return (
                  <div className="w-full" key={index}>
                    <label
                      htmlFor={rationType}
                      className="text-sm text-slate-800"
                    >
                      {rationType}
                    </label>
                    <select
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleQuantityChange(e, day, meal, rationType)
                      }
                      id={rationType}
                    >
                      {new Array(200)
                        .fill(0)
                        .map((_item: number, indexA: number) => {
                          return <option key={indexA}>{indexA}</option>;
                        })}
                    </select>
                  </div>
                );
              }
            )}
            <SecondaryButton
              activated={report[day][meal].or}
              onClick={() => handleToggleOR(day, meal)}
            >
              Outration
            </SecondaryButton>
          </FlexContainer>
        )}
      </FlexContainer>
    );
}
