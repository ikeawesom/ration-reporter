export type UtilityType = {
  className?: string;
  parentClassName?: string;
  children?: React.ReactNode;
};

export type DayType = { day: number; month: number; year: number };

export type DailyRationType = {
  state: boolean;
  or: boolean;
  qty: { [mealType: string]: number };
};

export type DailySnackType = {
  state: boolean;
  qty: { [snackType: string]: number };
};

export type WeeklyRationType = {
  [day: string]: { [meal: string]: DailyRationType };
};

export type WeeklySnackType = {
  [day: string]: DailySnackType;
};

export const MEALS = ["Breakfast", "Lunch", "Dinner"];

export const DefaultRationQty = {
  "Non-Muslim": 0,
  Muslim: 0,
  "Veg-Chinese": 0,
  "Veg-Indian": 0,
  "Special Diet": 0,
};

export const DefaultSnacksQty = {
  Carbs: 0,
  Protein: 0,
  "Night 1": 0,
  "Night 2": 0,
};

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

export const DAILY_SNACKS = {
  state: false,
  qty: DefaultSnacksQty,
} as DailySnackType;

export const WEEKLY_RATION = {
  Monday: DAILY_RATION,
  Tuesday: DAILY_RATION,
  Wednesday: DAILY_RATION,
  Thursday: DAILY_RATION,
  Friday: DAILY_RATION,
  Saturday: DAILY_RATION,
  Sunday: DAILY_RATION,
} as WeeklyRationType;

export const WEEKLY_SNACKS = {
  Monday: DAILY_SNACKS,
  Tuesday: DAILY_SNACKS,
  Wednesday: DAILY_SNACKS,
  Thursday: DAILY_SNACKS,
  Friday: DAILY_SNACKS,
  Saturday: DAILY_SNACKS,
  Sunday: DAILY_SNACKS,
} as WeeklySnackType;
