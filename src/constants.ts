export type UtilityType = {
  className?: string;
  parentClassName?: string;
  children?: React.ReactNode;
};

export type DayType = { day: number; month: number; year: number };

export const DefaultRationQty = {
  "Non-Muslim": 0,
  Muslim: 0,
  "Veg-Chinese": 0,
  "Veg-Indian": 0,
  "Special Diet": 0,
};

export type DailyRationType = {
  state: boolean;
  or: boolean;
  qty: { [mealType: string]: number };
};

export const MEALS = ["Breakfast", "Lunch", "Dinner"];

export const DAILY_RATION = {
  Breakfast: {
    state: false,
    or: false,
    qty: DefaultRationQty,
  },
  Lunch: {
    state: false,
    or: false,
    qty: DefaultRationQty,
  },
  Dinner: {
    state: false,
    or: false,
    qty: DefaultRationQty,
  },
} as { [meal: string]: DailyRationType };

export type WeeklyRationType = {
  [day: string]: { [meal: string]: DailyRationType };
};

export const WEEKLY_RATION = {
  Monday: DAILY_RATION,
  Tuesday: DAILY_RATION,
  Wednesday: DAILY_RATION,
  Thursday: DAILY_RATION,
  Friday: DAILY_RATION,
  Saturday: DAILY_RATION,
  Sunday: DAILY_RATION,
} as WeeklyRationType;
