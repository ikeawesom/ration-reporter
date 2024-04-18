import React from "react";
import SecondaryButton from "./utils/SecondaryButton";
import { useSnackContext } from "./contexts/NightSnackContext";
import FlexContainer from "../utils/FlexContainer";

export default function DailySnacks({ day }: { day: string }) {
  const { handleToggleSnack, handleSnackChange, snacks } = useSnackContext();
  if (snacks !== null)
    return (
      <FlexContainer className="flex-1 gap-y-2 w-full">
        <SecondaryButton
          className="text-sm w-full"
          activated={snacks[day].state}
          onClick={() => handleToggleSnack(day)}
        >
          Snacks
        </SecondaryButton>
        {snacks[day].state && (
          <FlexContainer className="items-center justify-center gap-2 w-full">
            {Object.keys(snacks[day].qty).map(
              (snackType: string, index: number) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center gap-2"
                    key={index}
                  >
                    <label
                      htmlFor={snackType}
                      className="text-sm text-slate-800 text-center"
                    >
                      {snackType}
                    </label>
                    <input
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSnackChange(e, day, snackType)
                      }
                      className="shadow-sm px-2 py-1 border-[1px] border-slate-200 rounded-md w-full"
                      id={snackType}
                      type="number"
                      value={snacks[day].qty[snackType]}
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
