import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import {
    Checkbox,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    clearSelectedCells,
    selectCells,
    unselectCols,
} from "../../redux/reducers/cells"
import {
    CLEAR_SELECTED_CELLS,
    CLEAR_SELECTED_ITEMS,
    UNSELECT_COLS,
} from "../../redux/types"
import { clearSelected } from "../../redux/reducers/items"
import CellsSelect from "./cellsSelect/CellsSelect"

const MainBar = () => {
    const [value, setValue] = useState<"01" | "02" | "03" | "">("")
    const [rewrite, setRewrite] = useState<boolean>(false)
    const [useAll, setUseAll] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const cells = useSelector(selectCells)

    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    const handleRewrite = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRewrite(event.target.checked)
    }

    const handleUseAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseAll(event.target.checked)
    }

    const clearSelectedItems = () => {
        dispatch(clearSelected({ type: CLEAR_SELECTED_ITEMS }))
    }

    useEffect(() => {
        if (useAll) {
            dispatch(clearSelectedCells({ type: CLEAR_SELECTED_CELLS }))
            dispatch(unselectCols({ type: UNSELECT_COLS }))
        }
    }, [useAll])

    useEffect(() => {
        dispatch(clearSelectedCells({ type: CLEAR_SELECTED_CELLS }))
        dispatch(unselectCols({ type: UNSELECT_COLS }))
    }, [value])

    return (
        <>
            <Grid
                container
                columnGap={1}
                p={2}
                direction={"row"}
                justifyContent={"center"}
                sx={{ width: 1200, m: "0 auto" }}
            >
                <InputLabel
                    sx={{ display: "flex", alignItems: "center" }}
                    id="demo-simple-select-label"
                >
                    Стелаж
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Стелаж"
                    sx={{ width: 75 }}
                    onChange={handleChange}
                >
                    <MenuItem value={"01"}>01</MenuItem>
                    <MenuItem value={"02"}>02</MenuItem>
                    <MenuItem value={"03"}>03</MenuItem>
                </Select>
                {value !== "" && !useAll ? (
                    <>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleOpen}
                        >
                            Вибрати ячейки
                        </Button>
                        <CellsSelect
                            open={open}
                            handleClose={handleClose}
                            rack={value}
                            cells={cells}
                        />
                    </>
                ) : (
                    ""
                )}

                <InputLabel
                    sx={{ display: "flex", alignItems: "center" }}
                    id="demo-simple-select-label"
                >
                    Усі вільні
                </InputLabel>
                <Checkbox
                    checked={useAll}
                    onChange={handleUseAll}
                    inputProps={{ "aria-label": "controlled" }}
                />
                <InputLabel
                    sx={{ display: "flex", alignItems: "center" }}
                    id="demo-simple-select-label"
                >
                    Перезаписати ячейки
                </InputLabel>
                <Checkbox
                    checked={rewrite}
                    onChange={handleRewrite}
                    inputProps={{ "aria-label": "controlled" }}
                />

                <Button variant="contained" color="primary">
                    Прив'язати
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={clearSelectedItems}
                >
                    Очистити виділені
                </Button>
            </Grid>
        </>
    )
}

export default MainBar
