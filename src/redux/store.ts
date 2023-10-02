
import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from './reducers/items'
import cellsReducer from './reducers/cells'


export const store = configureStore({
  reducer: {
    cards:cardsReducer,
    cells: cellsReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
