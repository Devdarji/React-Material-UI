import { Grid } from "@mui/material"
import React from "react"

const GridMui = () => {
    return (
        <div>
            <h1>React Material UI - Grid</h1>
            <Grid lg={12} item spacing={2} container>
                <Grid lg={3} xs={12} sm={4} md={6} item>
                    <h1 style={{ backgroundColor: "red", color: "white" }}>Block 1</h1>
                </Grid>
                <Grid lg={3} xs={12} sm={4} md={6} item>
                    <h1 style={{ backgroundColor: "red", color: "white" }}>Block 2</h1>
                </Grid>
                <Grid lg={3} xs={12} sm={4} md={6} item>
                    <h1 style={{ backgroundColor: "red", color: "white" }}>Block 3</h1>
                </Grid>
                <Grid lg={3} xs={12} sm={4} md={6} item>
                    <h1 style={{ backgroundColor: "red", color: "white" }}>Block 4</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridMui