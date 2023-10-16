import { createSlice } from "@reduxjs/toolkit"
import * as actions from "../actions/items"

type Item = {
    name: string
    isChecked: boolean
    sales: number
    nz: number
    nzco: number
    cell: string
}

const getCartItems: Item[] = [
    {
        name: "LCD Xiaomi Redmi 9a with touch screen black",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "LCD Xiaomi Redmi 7a with touch screen black",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "LCD Samsung A720 with touch screen black",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "02-A-10",
    },
    {
        name: "Charge connector ун.2",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Battery Maxbat BM47",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Захисне скло Prime Xiaomi redmi 4x",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 4",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "11-A-23",
    },
    {
        name: "Деталь номер 124",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "14-A-25",
    },
    {
        name: "Деталь номер 5",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "15-Т-33",
    },
    {
        name: "Деталь номер 6",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 7",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 8",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 9",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 132",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь ;3211",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь печаль",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 124321421142412",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Деталь номер 4 20",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Захисна плівка номер 4545",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
    {
        name: "Сенс життя",
        isChecked: false,
        sales: 1,
        nzco: 2,
        nz: 1,
        cell: "",
    },
]

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        items: [...getCartItems],
    },
    reducers: {
        setCells: (state, action) => {
            state.items = actions.setCells(state.items, action.payload)
        },
        selectItem: (state, action) => {
            state.items = actions.selectItem(state.items, action.payload)
        },
        selectAllItems: (state, action) => {
            state.items = actions.selectAllItems(state.items, action.payload)
        },
        clearSelected: (state, action) => {
            state.items = actions.clearSelected(state.items, action.payload)
        },
    },
})

export const { selectItem, clearSelected, setCells, selectAllItems } =
    cardsSlice.actions
export const selectState = (state: any) => state.cards.items

export default cardsSlice.reducer
