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
  const [reportText, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    let text = "";
    let curDay = "";
    if (report)
      Object.keys(report).forEach((day: string, index: number) => {
        Object.keys(report[day]).forEach((meal: string) => {
          if (report[day][meal].state) {
            Object.keys(report[day][meal].qty).forEach((mealType: string) => {
              if (report[day][meal].qty[mealType] > 0) {
                const date = getCurrentDateString(monday, index);
                text += `${curDay !== day ? `\n\n*${day} (${date})*` : ""}
${mealType}: ${report[day][meal].qty[mealType]}`;
              }
            });
            curDay = day;
          }
        });
      });
    setText(text.trim());
    return text.trim();
  };

  const handleMonday = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonday({ ...monday, [e.target.name]: parseInt(e.target.value) });
  };

  return {
    reportText,
    generateReport,
    loading,
    handleMonday,
    monday,
    setLoading,
  };
}
