import { useSelector, useDispatch } from "react-redux"
import { selectItem, selectState } from "../../redux/reducers/items"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import CartItem from "./CartItem/CartItem"
import Typography from "@mui/material/Typography"

const Content = () => {
    const items = useSelector(selectState)
    const dispatch = useDispatch()

    return (
        <Box
            sx={{
                p: 3,
                width: 700,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                m: "0 auto",
            }}
        >
            <Grid
                container
                spacing={0}
                direction={"row"}
                columnGap={2}
                p={1}
                sx={{ width: 550 }}
            >
                <Typography variant="body1" color="initial">
                    №
                </Typography>
                <Typography variant="body1" color="initial">
                    Назва
                </Typography>
                <Typography variant="body1" sx={{ ml: "auto" }} color="initial">
                    Ячейка
                </Typography>
            </Grid>
            <Box
                sx={{
                    width: "100%",
                    rowGap: 1,
                    display: "flex",
                    flexDirection: "column",
                    height: 700,
                    overflowY: "scroll",
                }}
            >
                {items.map((item: any, id: number) => {
                    return (
                        <CartItem
                            key={id}
                            id={id}
                            name={item.name}
                            isChecked={item.isChecked}
                            cell={item.cell}
                            handleChecked={() => {
                                dispatch(
                                    selectItem({ type: "SELECT", payload: id })
                                )
                            }}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}

export default Content
