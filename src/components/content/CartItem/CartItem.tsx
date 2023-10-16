import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

type ItemProps = {
    id: number
    name: string
    isChecked: boolean
    sales: number
    nz: number
    nzco: number
    cell: string
    handleChecked: any
}

const CartItem = ({
    id,
    name,
    isChecked,
    cell,
    handleChecked,
    sales,
    nz,
    nzco,
}: ItemProps) => {
    return (
        <Grid
            container
            spacing={0}
            direction={"row"}
            columnGap={2}
            sx={{
                cursor: "pointer",
                bgcolor: isChecked ? "blue" : "",
                color: isChecked ? "white" : "black",
                p: 1,
                width: 650,
                border: "1px solid green",
            }}
            onClick={() => {
                handleChecked()
            }}
        >
            <Typography variant="body1">{id + 1 + "."}</Typography>
            <Typography variant="body1">{name}</Typography>
            <Grid item spacing={0} sx={{ ml: "auto" }}>
                <Grid container spacing={0} columnGap={2}>
                    <Typography
                        variant="body1"
                        sx={{ minWidth: 40, textAlign: "center" }}
                    >
                        {nzco}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ minWidth: 40, textAlign: "center" }}
                    >
                        {nz}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ minWidth: 40, textAlign: "center" }}
                    >
                        {sales}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ minWidth: 65, textAlign: "right" }}
                    >
                        {cell}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CartItem
