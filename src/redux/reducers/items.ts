import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../actions/items'

const getCartItems = [
  {id: '0001', name: "Bullying Hoodie", src: "/content/cards/bullying__hoodie.png", price: 30.99, type: "hoodie", amount: [{size: 'M', amount:2}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0002', name: "Bullying T-Shirt", src: "/content/cards/bullying__tShirt.png", price: 30.99, type: "t-shirt", amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0003', name: "Bullying Longsleave", src: "/content/cards/bullying__long.png", price: 30.99, type: 'longsleave',amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0004', name: "Post-War Hoodie", src: "/content/cards/postWar__hoodie.png", price: 30.99, type: "hoodie", amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0005', name: "Post-War T-Shirt", src: "/content/cards/postWar__tShirt.png", price: 30.99, type: "t-shirt", amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0006', name: "Post-War Longsleave", src: "/content/cards/postWar__long.png", price: 30.99, type: "longsleave", amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]},
  {id: '0007', name: "Post-War 2 Hoodie", src: "/content/cards/postWar2__hoodie.png", price: 30.99, type: "hoodie", amount: [{size: 'M', amount:1}, {size:'L', amount: 1},{size: 'XL', amount:1}]}
]

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: [...getCartItems]
    
  },
  reducers: {
    addItem: (state, action)=> {
      state.items = actions.addItem(state.items)
    },
    removeItem: (state,action) =>{
      state.items
    },
    
  },
})

export const { addItem, removeItem } = cardsSlice.actions
export const selectState = (state:any)=> state.cards.items

export default cardsSlice.reducer