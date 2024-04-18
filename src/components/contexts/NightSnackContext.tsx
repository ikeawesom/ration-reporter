import { createContext, useContext, useState } from "react";
import { WEEKLY_SNACKS, WeeklySnackType } from "../../constants";

export type SnacksContextType = {
  snacks: WeeklySnackType | null;
  setSnacks: React.Dispatch<React.SetStateAction<WeeklySnackType | null>>;
};

export const SnacksContext = createContext<SnacksContextType | null>(null);

export function SnacksProvider({ children }: { children: React.ReactNode }) {
  const [snacks, setSnacks] = useState<WeeklySnackType | null>(WEEKLY_SNACKS);

  return (
    <SnacksContext.Provider value={{ snacks, setSnacks }}>
      {children}
    </SnacksContext.Provider>
  );
}

export function useSnackContext() {
  const ctx = useContext(SnacksContext);
  if (!ctx) {
    throw new Error("useSnackContext must be used within a SnackProvider");
  }

  const { setSnacks, snacks } = ctx;

  const handleToggleSnack = (day: string) => {
    if (snacks !== null)
      setSnacks({
        ...snacks,
        [day]: {
          ...snacks[day],
          state: !snacks[day].state,
        },
      });
  };

  const handleSnackChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    day: string,
    snackType: string
  ) => {
    let value = 0;
    if (e.target.value === "") {
      value = 0;
    } else {
      value = parseInt(e.target.value);
    }

    if (snacks !== null)
      setSnacks({
        ...snacks,
        [day]: {
          ...snacks[day],
          qty: {
            ...snacks[day].qty,
            [snackType]: value,
          },
        },
      });
  };

  return { snacks, setSnacks, handleToggleSnack, handleSnackChange };
}
