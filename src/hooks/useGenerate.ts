import { useState } from "react";
import { useReportContext } from "../components/contexts/ReportContext";
import { DayType } from "../constants";
import { getCurrentDateString } from "../utils/getCurrentDate";
import { useSnackContext } from "../components/contexts/NightSnackContext";

export default function useGenerate() {
  const { report } = useReportContext();
  const { snacks } = useSnackContext();

  const [monday, setMonday] = useState<DayType>({
    day: 1,
    month: 1,
    year: 2024,
  });
  const [loading, setLoading] = useState(false);

  const generateReport = () => {
    let text = "";

    if (report && snacks)
      Object.keys(report).forEach((day: string, index: number) => {
        const date = getCurrentDateString(monday, index);

        let tempText = `\n*${day} (${date})*`;
        let indent = false;

        Object.keys(report[day]).forEach((meal: string) => {
          // settle main meals
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

        // settle night snacks
        const snacksIndent = snacks[day].state;
        if (snacksIndent) {
          let snackText = "\n\nDaily Snacks:\n";
          Object.keys(snacks[day].qty).forEach((snackType: string) => {
            const snackQty = snacks[day].qty[snackType];
            snackText += `${snackType}: ${snackQty > 0 ? snackQty : "NIL"}\n`;
          });
          tempText += snackText;
        }

        if (indent || snacksIndent) {
          text += tempText + "\n--------";
        }
      });
    return text.trim();
  };

  const handleMonday = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = 0;
    if (e.target.value !== "") {
      value = parseInt(e.target.value);
    }
    setMonday({ ...monday, [e.target.name]: value });
  };

  return {
    generateReport,
    loading,
    handleMonday,
    monday,
    setLoading,
  };
}
