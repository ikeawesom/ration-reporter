import { createContext, useContext, useState } from "react";
import { WEEKLY_RATION, WeeklyRationType } from "../../constants";

export type RationContextType = {
  report: WeeklyRationType | null;
  setReport: React.Dispatch<React.SetStateAction<WeeklyRationType | null>>;
};

export const RationContext = createContext<RationContextType | null>(null);

export function ReportProvider({ children }: { children: React.ReactNode }) {
  const [report, setReport] = useState<WeeklyRationType | null>(WEEKLY_RATION);

  return (
    <RationContext.Provider value={{ report, setReport }}>
      {children}
    </RationContext.Provider>
  );
}

export function useReportContext() {
  const ctx = useContext(RationContext);
  if (!ctx) {
    throw new Error("useReportState must be used within a ReportProvider");
  }

  const { report, setReport } = ctx;
  const handleChange = (day: string, meal: string) => {
    if (report !== null)
      setReport({
        ...report,
        [day]: {
          ...report[day],
          [meal]: {
            ...report[day][meal],
            state: !report[day][meal].state,
          },
        },
      });
  };

  const handleToggleOR = (day: string, meal: string) => {
    if (report !== null)
      setReport({
        ...report,
        [day]: {
          ...report[day],
          [meal]: {
            ...report[day][meal],
            or: !report[day][meal].or,
          },
        },
      });
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    day: string,
    meal: string,
    rationType: string
  ) => {
    const value = parseInt(e.target.value);
    if (report !== null)
      setReport({
        ...report,
        [day]: {
          ...report[day],
          [meal]: {
            ...report[day][meal],
            qty: { ...report[day][meal].qty, [rationType]: value },
          },
        },
      });
  };

  return { report, handleChange, handleQuantityChange, handleToggleOR };
}
