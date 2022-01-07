// ts
import { PayloadAction } from '@reduxjs/toolkit'

// local data
import Portfolio from "../../models/portfolio";
import { zhFolio } from "./portfolioZh";
import { enFolio } from "./portfolioEn";

export const initState: Portfolio = {
  zh: zhFolio,
  en: enFolio
}

export default (state: Portfolio = initState, action: PayloadAction<string>) => {
  // TODO: state -> staet.en after reduce 
  switch(action.type) {
    case 'ZH':
      console.log(1)
      return state.zh
    case 'EN':
      return state.en
    default:
      console.log(3)
      return state
  }
}