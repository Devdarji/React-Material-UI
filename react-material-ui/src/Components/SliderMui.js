import { Slider } from "@mui/material"
import React, { useState } from "react"

const SliderMui = () => {
    const [val, setVal] = useState([50, 100])
    const mark = [
        {
            value: 0,
            label: "start"
        },
        {
            value: 250,
            label: "medium"
        },
        {
            value: 500,
            label: "end"
        },
        {
            value: 100,
            label: "custom"
        },
    ]

    const getValue = (e, val) => {
        // console.log(e.target.value)
        console.log(val)
    }

    const checkValue = (e, val) => {
        setVal(val)
    }

    return (
        <div>
            <h1>React Material UI - Slider</h1>
            <div style={{ width: 500, margin: 50 }}>
                <Slider color="primary" defaultValue={250} max={500} step={50} marks={mark} valueLabelDisplay="auto" onChange={getValue} />
                <Slider color="success" />
            </div>

            <div style={{ height: 500, margin: 50 }}>
                <Slider color="info" defaultValue={250} max={500} step={50} marks={mark} valueLabelDisplay="auto" onChange={getValue} orientation="vertical" />
                <Slider color="success" orientation="vertical" />
            </div>
            <hr />
            <h1>React Material UI - Range Slider</h1>

            <div style={{ width: 500, margin: 50 }}>
                <Slider color="primary" max={500} value={val} onChange={checkValue} />
                <Slider color="success" />
            </div>
        </div>
    )
}

export default SliderMui