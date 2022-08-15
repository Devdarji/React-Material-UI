import { AppBar, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"

const TabsMui = () => {
    const [value, setValue] = useState(0)
    const handleTabs = (e, val) => {
        console.log(val)
        setValue(val)
    }

    return (
        <div>
            <h1>React Material UI - Tabs</h1>
            {/* <AppBar position="static"> */}
            <Tabs value={value} onChange={handleTabs}>
                <Tab label="Item 1" />
                <Tab label="Item 2" />
                <Tab label="Item 3" />
            </Tabs>
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>Item 1 Details</TabPanel>
            <TabPanel value={value} index={1}>Item 2 Details</TabPanel>
            <TabPanel value={value} index={2}>Item 3 Details</TabPanel>
        </div>
    )
}



const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && (
                    <h1>{children}</h1>
                )
            }

        </div>
    )
}

export default TabsMui