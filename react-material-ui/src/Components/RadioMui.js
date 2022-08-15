import { Radio } from "@mui/material"
import React, { useState } from "react"

const RadioMui = () => {
    const [gender, setGender] = useState('male')

    const handleGender = (e) => {
        setGender(e.target.value)
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>React Material UI - Radio Button</h1>
            <span>Male</span>
            <Radio color="primary" value="male" checked={gender === 'male'} onChange={handleGender} />
            <span>Female</span>
            <Radio color="success" value="female" checked={gender === 'female'} onChange={handleGender} />
            <span>Other</span>
            <Radio color="error" value="other" checked={gender === 'other'} onChange={handleGender} />
        </div>
    )
}

export default RadioMui