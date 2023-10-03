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
        allCells?: any[]
        selectedRack: string
    }
}

export const setCells = (state: any, action: SetCellsProps) => {
    if (action.type === SET_CELLS) {
        if (action.payload.isUseAll && action.payload.allCells) {
            let freeCells: any[] = []
            action.payload.allCells
                .find((rack) => rack.rack === action.payload.selectedRack)
                .rows.forEach((row: any) => {
                    row.columns.forEach((col: any) => {
                        freeCells.push(
                            `${action.payload.selectedRack}-${row.row}-${col.column}`
                        )
                    })
                })

            if (action.payload.isOverwrite) {
                let i = 0
                return state.map((item: any) => {
                    if (item.isChecked && i < freeCells.length) {
                        let newItem = {
                            ...item,
                            cell: freeCells[i],
                        }
                        i = i + 1

                        return newItem
                    }
                    return item
                })
            }

            let i = 0
            return state.map((item: any) => {
                if (
                    item.isChecked &&
                    i < freeCells.length &&
                    item.cell === ""
                ) {
                    let newItem = {
                        ...item,
                        cell: freeCells[i],
                    }
                    i = i + 1

                    return newItem
                }
                return item
            })
        }
        if (action.payload.isOverwrite) {
            let i: number = 0
            return state.map((item: any) => {
                if (item.isChecked && i < action.payload.cells.length) {
                    let newItem = {
                        ...item,
                        cell: `${action.payload.cells[i].rack}-${action.payload.cells[i].row}-${action.payload.cells[i].col}`,
                    }
                    i = i + 1

                    return newItem
                }
                return item
            })
        }
        let i: number = 0
        return state.map((item: any) => {
            if (
                item.cell === "" &&
                item.isChecked &&
                i < action.payload.cells.length
            ) {
                let newItem = {
                    ...item,
                    cell: `${action.payload.cells[i].rack}-${action.payload.cells[i].row}-${action.payload.cells[i].col}`,
                }
                i = i + 1

                return newItem
            }
            return item
        })
    }
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

export const selectAllItems = (state: any, action: any) => {
    if (action.type === SELECT_ALL_ITEMS)
        return state.map((item: any) => ({ ...item, isChecked: true }))
    if (action.type === UNSELECT_ALL_ITEMS)
        return state.map((item: any) => ({ ...item, isChecked: false }))
    return state
}
