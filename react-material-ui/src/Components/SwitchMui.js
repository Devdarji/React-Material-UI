import { Switch } from "@mui/material"
import React from "react"

const SwitchMui = () => {

    const getValue = (e, val) => {
        console.log(val)
    }

    return (
        <div>
            <h1>React Material UI - Switch</h1>
            <Switch
                size="medium"
                color="error"
                onChange={getValue}
            /><br /><br />
            <Switch
                size="small"
                color="primary"
            />
        </div>
    )
}


export default SwitchMui