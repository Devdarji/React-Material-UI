import { Favorite, FavoriteBorderRounded, Star } from "@mui/icons-material"
import { Checkbox } from "@mui/material"
import React, { useState } from "react"


const CheckBoxMui = () => {
    const [name, setName] = useState([])

    const getValue = (e) => {
        let data = name;
        data.push(e.target.value);
        setName(data);
        console.log(data);
    }

    return (
        <div>
            <h1>React Material UI - CheckBox</h1>
            <Checkbox onChange={(e) => getValue(e)} value="Dev" color="primary" />
            <Checkbox onChange={(e) => getValue(e)} value="Ravi" color="secondary" />
            <Checkbox onChange={(e) => getValue(e)} value="Kiran" color="default" />
            <Checkbox onChange={(e) => getValue(e)} indeterminate value="Darshan" color="success" />
            <Checkbox onChange={(e) => getValue(e)} icon={<FavoriteBorderRounded />} checkedIcon={<Star />} value="Haresh" color="success" />
            <Checkbox onChange={(e) => getValue(e)} checkedIcon={<Favorite />} icon={<FavoriteBorderRounded />} value="Mayur" color="success" />
        </div>
    )
}

export default CheckBoxMui