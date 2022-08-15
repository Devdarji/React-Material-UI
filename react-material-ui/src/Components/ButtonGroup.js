import { Button, ButtonGroup } from '@mui/material';
import React from 'react';


const ButtonGroupMui = () => {
    return (
        <div>
            <h1>React Material UI - Button Group</h1>
            <ButtonGroup>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup><br /><br />
            <ButtonGroup color="error" variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup><br /><br />
            <ButtonGroup color="success" variant='contained' orientation='vertical'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup><br /><br />
        </div>
    )
}

export default ButtonGroupMui