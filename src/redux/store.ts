
import { configureStore } from "@reduxjs/toolkit"
import cardsReducer from './reducers/items'


export const store = configureStore({
  reducer: {
    cards:cardsReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
