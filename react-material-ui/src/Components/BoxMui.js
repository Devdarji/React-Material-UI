import { Box, Button } from "@mui/material"
import React from "react"


const BoxMui = () => {
    return (
        <div>
            <h1>React Material UI - Box</h1>
            {/* <Box component="span">
                <Button>Click Here</Button>
            </Box><br/> */}
            <Box clone style={{color:'red'}} m={40}>
                <Button>Click Here</Button>
            </Box>
        </div>
    )
}

export default BoxMui