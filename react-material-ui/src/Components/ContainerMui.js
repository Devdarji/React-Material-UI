import { Container } from "@mui/material"
import React from "react"

const ContainerMui = () => {
    return (
        <div align="center">
            <h1>React Material UI - Container</h1>
            <Container maxWidth="xs" style={{backgroundColor:"black", padding:10, margin:30, color:"white"}}>
                <h1>Container is a Extra Small</h1>
            </Container>
            <Container maxWidth="sm" style={{backgroundColor:"black", padding:10, margin:30, color:"white"}}>
                <h1>Container is a Small</h1>
            </Container>
            <Container maxWidth="md" style={{backgroundColor:"black", padding:10, margin:30, color:"white"}}>
                <h1>Container is a Medium</h1>
            </Container>
            <Container maxWidth="lg" style={{backgroundColor:"black", padding:10, margin:30, color:"white"}}>
                <h1>Container is a Large</h1>
            </Container>
            <Container fixed style={{backgroundColor:"black", padding:10, margin:30, color:"white"}}>
                <h1>Container is a Fixed</h1>
            </Container>
        </div>
    )
}

export default ContainerMui