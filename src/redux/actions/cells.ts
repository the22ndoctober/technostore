import { CLEAR_SELECTED_CELLS, SELECT_COL, UNSELECT_COLS } from "../types"

export const handleCell = (state: any, action: any) => {
    return state
}

export const clearSelectedCells = (state: any, action: any) => {
    if (action.type === CLEAR_SELECTED_CELLS) return []
    return state
}

export const selectCol = (state: any, action: any) => {
    if (action.type === SELECT_COL) {
        return state.map((rack: any) =>
            rack.rack === action.payload.rack
                ? {
                      ...rack,
                      rows: rack.rows.map((row: any) =>
                          row.row === action.payload.row
                              ? {
                                    ...row,
                                    columns: row.columns.map((column: any) =>
                                        column.column === action.payload.col
                                            ? {
                                                  ...column,
                                                  isSelected:
                                                      !column.isSelected,
                                              }
                                            : column
                                    ),
                                }
                              : row
                      ),
                  }
                : rack
        )
    }
    return state
}

export const unselectCols = (state: any, action: any) => {
    if (action.type === UNSELECT_COLS)
        return state.map((rack: any) => ({
            ...rack,
            rows: rack.rows.map((row: any) => ({
                ...row,
                columns: row.columns.map((column: any) => ({
                    ...column,
                    isSelected: false,
                })),
            })),
        }))
    return state
}
