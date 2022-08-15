import { MenuItem, Select } from "@mui/material"
import React, { useState } from "react"

const SelectBox = () => {
    const [subject, setSubject] = useState("")

    const updateSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div>
            <h1>React Material UI - Select Box Or Select</h1>
            <Select value={subject} displayEmpty onChange={updateSubject}>
                <MenuItem value="" disabled>Select Subject</MenuItem>
                <MenuItem value={1}>Python</MenuItem>
                <MenuItem value={2}>React</MenuItem>
                <MenuItem value={3}>Java Script</MenuItem>
                <MenuItem value={4}>Django</MenuItem>
            </Select>
        </div>
    )
}

export default SelectBox