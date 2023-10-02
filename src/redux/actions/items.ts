import {
    CLEAR_SELECTED_ITEMS,
    SELECT_ALL_ITEMS,
    SET_CELLS,
    UNSELECT_ALL_ITEMS,
} from "../types"

type Cells = {
    rack: string
    row: string
    col: string
}

type SetCellsProps = {
    type: string
    payload: {
        isOverwrite: boolean
        isUseAll: boolean
        cells: Cells[]
    }
}

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

export const setCells = (state: any, action: SetCellsProps) => {
    if (action.type === SET_CELLS) {
        if (action.payload.isUseAll) {
            if (action.payload.isOverwrite) {
            }
            return state
        }
        return state.map()
    }
    return state
}

export const selectAllItems = (state: any, action: any) => {
    if (action.type === SELECT_ALL_ITEMS)
        return state.map((item: any) => ({ ...item, isChecked: true }))
    if (action.type === UNSELECT_ALL_ITEMS)
        return state.map((item: any) => ({ ...item, isChecked: false }))
    return state
}
