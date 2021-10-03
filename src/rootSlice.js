import { createSlice } from "@reduxjs/toolkit";
import cards from "./cards";

const cardSlice = createSlice({
  name: "cards",
  initialState: { cards },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload)
    },
    setDefaultCard: (state, action) => {
      state.defaultCard = action.payload;
    },
  },
});

const rootSlice = createSlice({
  name: "root",
  initialState: {
    defaultCard: [],
  },
  reducers: {
    setDefaultCard: (state, action) => {
      state.defaultCard = action.payload;
    },

  },
});


const { actions: rootActions, reducer: rootReducer } = rootSlice
const { actions: cardActions, reducer: cardReducer } = cardSlice
export { rootActions, rootReducer, cardActions, cardReducer}

