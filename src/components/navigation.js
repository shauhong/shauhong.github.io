"use client"
import Link from 'next/link'
import {
    AppBar,
    Button,
    Toolbar,
} from "@mui/material"
import { usePathname } from 'next/navigation';
export function NavBar({
    links
}) {
    const pathname = usePathname();
    return (
        <AppBar position="sticky" sx={{ display: "flex", alignItems: "flex-end", boxShadow: "none", borderBottom: "6px solid" }} color="primary">
            <Toolbar sx={{ display: "flex" }}>
                {
                    links && links.map(item => 
                        <Button 
                        key={item.name} 
                        color="tertiary"
                        disableRipple 
                        sx={{
                            "&:hover": { cursor: "default", border: "none", fontWeight: "bold", backgroundColor: "initial", borderColor: "initial"}, 
                            fontWeight: pathname === item.link ? "bold" : "regular"
                        }}
                        >
                            <Link href={item.link}>{item.name}</Link>
                        </Button>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}