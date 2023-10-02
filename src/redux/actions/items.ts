import { CLEAR_SELECTED_ITEMS } from "../types"

export const addItem = (state: any) => {
    return state
}

export const selectItem = (state: any, action: any) => {
    return state.map((item: any, id: number) =>
        action.payload === id ? { ...item, isChecked: !item.isChecked } : item
    )
}

export const clearSelected = (state: any, action: any) => {
    if (action.type === CLEAR_SELECTED_ITEMS) {
        return state.map((item: any) =>
            item.isChecked && item.cell !== "" ? { ...item, cell: "" } : item
        )
    }
    return state
}
