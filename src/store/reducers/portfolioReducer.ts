// type
import { PayloadAction } from "@reduxjs/toolkit";

// local data
import { zhFolio } from "./portfolioZh";
import { enFolio } from "./portfolioEn";

export const initState = enFolio;

export const languageReducer = (
  state = initState,
  action: PayloadAction<string>
) => {
  switch (action.type) {
    case "ZH":
      return zhFolio;
    case "EN":
      return enFolio;
    default:
      return state;
  }
};
