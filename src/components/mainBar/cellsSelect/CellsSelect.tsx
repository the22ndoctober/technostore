import { Box, Modal } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useDispatch } from "react-redux"
import { SELECT_COL } from "../../../redux/types"
import { selectCol } from "../../../redux/reducers/cells"

export type CellsSelectProps = {
    rack: "01" | "02" | "03" | ""
    open: boolean
    handleClose: any
    cells: any
}

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "scroll",
    height: "75%",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

const CellsSelect = ({ open, handleClose, rack, cells }: CellsSelectProps) => {
    const dispatch = useDispatch()

    const selectColumn = (row: string, col: string) => {
        dispatch(
            selectCol({
                type: SELECT_COL,
                payload: { rack: rack, row: row, col: col },
            })
        )
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {rack}
                </Typography>
                {cells
                    .find((cell: any) => cell.rack === rack)
                    .rows.map((row: any) => (
                        <>
                            <Typography variant="h6" color="initial">
                                {row.row}
                            </Typography>
                            {row.columns.map((column: any) => {
                                return (
                                    <Typography
                                        id="modal-modal-description"
                                        sx={{
                                            cursor: "pointer",
                                            p: 1,
                                            mt: 2,
                                            bgcolor: column.isSelected
                                                ? "blue"
                                                : "",
                                            color: column.isSelected
                                                ? "white"
                                                : "black",
                                        }}
                                        onClick={() => {
                                            selectColumn(row.row, column.column)
                                        }}
                                    >
                                        Комірка: {rack}-{row.row}-
                                        {column.column}
                                    </Typography>
                                )
                            })}
                        </>
                    ))}
            </Box>
        </Modal>
    )
}

export default CellsSelect
