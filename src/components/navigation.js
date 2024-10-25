"use client"
import Link from 'next/link'
import {
    AppBar,
    Button,
    Toolbar,
} from "@mui/material"
export function NavBar({
    links
}) {
    return (
            <AppBar position="sticky" sx={{ display: "flex", alignItems: "flex-end", boxShadow: "none", borderBottom: "6px solid"}} color="primary">
                <Toolbar sx={{ display: "flex" }}>
                    {
                        links && links.map(item => <Button key={item.name} variant="text" color="secondary"><Link href={item.link}>{item.name}</Link></Button>)
                    }
                </Toolbar>
            </AppBar>
    );
}