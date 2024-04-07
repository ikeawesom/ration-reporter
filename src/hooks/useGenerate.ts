import { useState } from "react";
import { useReportContext } from "../components/contexts/ReportContext";
import { DayType } from "../constants";
import { getCurrentDateString } from "../utils/getCurrentDate";

export default function useGenerate() {
  const { report } = useReportContext();
  const [monday, setMonday] = useState<DayType>({
    day: 1,
    month: 1,
    year: 2024,
  });
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    let text = "";

    if (report)
      Object.keys(report).forEach((day: string, index: number) => {
        const date = getCurrentDateString(monday, index);

        let tempText = `\n*${day} (${date})*`;
        let indent = false;

        Object.keys(report[day]).forEach((meal: string) => {
          if (report[day][meal].state) {
            const isOR = report[day][meal].or;

            let mealText = `\n\n${meal}${isOR ? " (OR)" : " (Dine-in)"}`;
            let indentA = false;

            if (report[day][meal].state) {
              Object.keys(report[day][meal].qty).forEach((mealType: string) => {
                if (report[day][meal].qty[mealType] > 0) {
                  indentA = true;
                  mealText += `\n${mealType}: ${report[day][meal].qty[mealType]}`;
                }
              });
            }

            if (indentA || !isOR) {
              // indented
              indent = true;
              tempText += mealText;
            }
          }
        });

        if (indent) {
          text += tempText + "\n--------";
        }
      });
    return text.trim();
  };

  const handleMonday = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonday({ ...monday, [e.target.name]: parseInt(e.target.value) });
  };

  return {
    generateReport,
    loading,
    handleMonday,
    monday,
    setLoading,
  };
}
