import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import {
    Checkbox,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material"
import { useState } from "react"

const MainBar = () => {
    const [value, setValue] = useState("")
    const [rewrite, setRewrite] = useState<boolean>(false)
    const [useAll, setUseAll] = useState<boolean>(false)

    const handleChange = (event: any) => {
        setValue(event.target.value as string)
    }

    const handleRewrite = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRewrite(event.target.checked)
    }

    const handleUseAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUseAll(event.target.checked)
    }

    return (
        <>
            <Grid
                container
                columnGap={2}
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
                    <Button variant="contained" color="primary">
                        Вибрати ячейки
                    </Button>
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
                <Button variant="contained" color="primary">
                    Очистити виділені
                </Button>
            </Grid>
        </>
    )
}

export default MainBar
