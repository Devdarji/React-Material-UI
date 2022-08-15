import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material"
import React, { useState } from 'react';

const MuiButton = () => {
    const [color, setColor] = useState('primary');
    const [variant, setVariant] = useState('outlined')

    const buttonClick = () => {
        setColor('error')
        setVariant('contained')
        if (variant === 'contained') {
            setColor('primary')
            setVariant('outlined')
        }
    }

    return (
        <div>
            <h1>React Material UI - Buttons</h1>
            <Button startIcon={<Delete />} size="small" color={color} variant={variant} onClick={buttonClick}>MUI Button</Button><br /><br />
            <Button startIcon={<Delete />} size="medium" color="success" variant="outlined" onClick={buttonClick}>MUI Button</Button><br /><br />
            <Button startIcon={<Delete />} size="large" color="secondary" variant="contained" onClick={buttonClick}>MUI Button</Button><br /><br />
            <Button startIcon={<Delete />} size="small" color="error" variant="contained" onClick={buttonClick}>MUI Button</Button><br /><br />
            <Button startIcon={<Delete />} size="medium" color="inherit" variant="outlined" onClick={buttonClick}>MUI Button</Button><br /><br />
            <Button startIcon={<Delete />} size="large" color="warning" variant="contained" onClick={buttonClick} disabled>MUI Button</Button><br /><br />
        </div>
    )
}

export default MuiButton