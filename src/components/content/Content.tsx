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
                width: 720,
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
                sx={{ width: 650 }}
            >
                <Typography variant="body1" color="initial">
                    №
                </Typography>
                <Typography variant="body1" color="initial">
                    Назва
                </Typography>
                <Grid item spacing={0} sx={{ ml: "auto" }}>
                    <Grid container spacing={0} columnGap={2}>
                        <Typography variant="body1" color="initial">
                            НЗЦО
                        </Typography>
                        <Typography variant="body1" color="initial">
                            НЗ
                        </Typography>
                        <Typography variant="body1" color="initial">
                            Продажі
                        </Typography>
                        <Typography variant="body1" color="initial">
                            Ячейка
                        </Typography>
                    </Grid>
                </Grid>
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
                            sales={item.sales}
                            nz={item.nz}
                            nzco={item.nzco}
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
