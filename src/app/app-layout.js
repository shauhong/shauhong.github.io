"use client"
import "./globals.css";
import {
    Box,
    createTheme,
    Grid2,
    ThemeProvider
} from "@mui/material"
import {
    NavBar
} from "@/components/navigation";

const links = [
    {
        link: "/",
        name: "About"
    },
    {
        link: "/experience",
        name: "Experience"
    },
    {
        link: "/skills",
        name: "Skills"
    },
]

export default function AppLayout({ children }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            secondary: {
                main: "#000"
            },
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{m: 4}}>
            <NavBar links={links} />
            <Grid2 container sx={{ m: 4}}>
                <Grid2 size={12}>
                {children}
                </Grid2>
            </Grid2>
            </Box>
        </ThemeProvider>
    );
}
