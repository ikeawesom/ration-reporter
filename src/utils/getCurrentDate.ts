import { DayType } from "../constants";

export function getCurrentDateString(monday: DayType, index: number) {
  const currentDate = new Date(
    monday.year,
    monday.month - 1,
    monday.day + index
  );

  const curDay = currentDate.getDate();
  const curMonth = currentDate.getMonth() + 1;
  const curYear = currentDate.getFullYear();
  const dateString = `${curDay}/${curMonth}/${curYear}`;

  return dateString;
}
