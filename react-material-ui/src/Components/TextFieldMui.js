import { TextField } from "@mui/material"
import React from "react"

const TextFieldMui = () => {
    return (
        <div style={{margin:50}}>
            <h1>React Material UI - TextField</h1>
            <TextField fullWidth label="Enter Name" color="primary" /><br /><br />
            <TextField fullWidth label="Enter Name" color="error" variant="filled" /><br /><br />
            <TextField fullWidth label="Enter Name" color="secondary" variant="outlined" multiline /><br /><br />
            <TextField fullWidth label="Enter Name" color="success" variant="standard" /><br /><br />
            <TextField fullWidth label="Enter Mobile" color="info" variant="filled" type="number"/><br /><br />
            <TextField fullWidth label="Enter Password"  variant="outlined" type="password"/><br /><br />
        </div>
    )
}

export default TextFieldMui