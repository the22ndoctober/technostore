import { createSlice } from "@reduxjs/toolkit"
import * as actions from "../actions/cells"

const initialState = [
    {
        rack: "01",
        rows: [
            {
                row: "А",
                columns: [
                    { column: "02", isSelected: true },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Б",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Г",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
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
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Б",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Г",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
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
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Б",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
                ],
            },
            {
                row: "Г",
                columns: [
                    { column: "01", isSelected: false },
                    { column: "02", isSelected: false },
                    { column: "03", isSelected: false },
                    { column: "04", isSelected: false },
                    { column: "05", isSelected: false },
                    { column: "06", isSelected: false },
                    { column: "07", isSelected: false },
                    { column: "08", isSelected: false },
                    { column: "09", isSelected: false },
                    { column: "10", isSelected: false },
                    { column: "11", isSelected: false },
                    { column: "12", isSelected: false },
                    { column: "13", isSelected: false },
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
        selectedCells: [],
    },
    reducers: {
        selectCol: (state, action) => {
            state.cells = actions.selectCol(state.cells, action.payload)
        },
        unselectCols: (state, action) => {
            state.cells = actions.unselectCols(state.cells, action.payload)
        },
        addSelectedCells: (state, action) => {
            state.selectedCells = actions.addSelectedCells(
                state.selectedCells,
                action.payload
            )
        },
        clearSelectedCells: (state, action) => {
            state.selectedCells = actions.clearSelectedCells(
                state.selectedCells,
                action.payload
            )
        },
    },
})

export const { clearSelectedCells, selectCol, unselectCols, addSelectedCells } =
    cellsSlice.actions
export const selectCells = (state: any) => state.cells.cells
export const selectFilledCells = (state: any) => state.cells.filledCells
export const selectSelectedCells = (state: any) => state.cells.selectedCells

export default cellsSlice.reducer
