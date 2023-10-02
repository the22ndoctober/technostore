import { createSlice } from "@reduxjs/toolkit"
import * as actions from "../actions/cells"

const initialState = [
    {
        rack: "01",
        rows: [
            {
                row: "А",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Б",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Г",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
        ],
    },
    {
        rack: "02",
        rows: [
            {
                row: "А",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Б",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Г",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
        ],
    },
    {
        rack: "03",
        rows: [
            {
                row: "А",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Б",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
            {
                row: "Г",
                columns: [
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                    "13",
                ],
            },
        ],
    },
]

const filledCells = [
    {
        rack: "01",
        rows: [
            {
                row: "А",
                columns: ["01", "03", "07"],
            },
            {
                row: "Б",
                columns: [],
            },
            {
                row: "Г",
                columns: [],
            },
        ],
    },
    {
        rack: "02",
        rows: [
            {
                row: "А",
                columns: ["10"],
            },
            {
                row: "Б",
                columns: [],
            },
            {
                row: "Г",
                columns: [],
            },
        ],
    },
    {
        rack: "03",
        rows: [
            {
                row: "А",
                columns: [],
            },
            {
                row: "Б",
                columns: [],
            },
            {
                row: "Г",
                columns: [],
            },
        ],
    },
]

const cellsSlice = createSlice({
    name: "cells",
    initialState: {
        cells: [...initialState],
        filledCells: [...filledCells],
    },
    reducers: {},
})

export const {} = cellsSlice.actions
export const selectCells = (state: any) => state.cells.cells
export const selectFilledCells = (state: any) => state.cells.cells

export default cellsSlice.reducer
