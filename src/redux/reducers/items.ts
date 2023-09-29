import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../actions/items'


type Item = {
  name: string
  isChecked: boolean
  cell: string
}

const getCartItems: Item[] = [
  {name: 'LCD Xiaomi Redmi 9a with touch screen black', isChecked: false, cell: ''},
  {name: 'LCD Xiaomi Redmi 7a with touch screen black', isChecked: false, cell: ''},
  {name: 'LCD Samsung A720 with touch screen black', isChecked: false, cell: '02-A-23'},
  {name: 'Charge connector ун.2', isChecked: false, cell: ''},
  {name: 'Battery Maxbat BM47', isChecked: false, cell: ''},
  {name: 'Захисне скло Prime Xiaomi redmi 4x', isChecked: false, cell: ''},
  {name: 'Деталь номер 4', isChecked: false, cell: ''},
  {name: 'Деталь номер 124', isChecked: false, cell: ''},
  {name: 'Деталь номер 4545', isChecked: false, cell: ''},
  
]

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [...getCartItems]
    
  },
  reducers: {
    addItem: (state)=> {
      state.items = actions.addItem(state.items)
    },
    selectItem: (state,action)=>{
      state.items = actions.selectItem(state.items, action.payload)
    }
    
    
  },
})

export const { addItem,selectItem } = cardsSlice.actions
export const selectState = (state:any)=> state.cards.items

export default cardsSlice.reducer