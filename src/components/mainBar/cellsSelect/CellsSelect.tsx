import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

type CellsSelectProps = {
    rack: "01" | "02" | "03"
}

const CellsSelect = ({ rack }: CellsSelectProps) => {
    return (
        <>
            <Grid container spacing={0}>
                <Typography variant="body1" color="initial">
                    {rack}
                </Typography>
            </Grid>
        </>
    )
}

export default CellsSelect
