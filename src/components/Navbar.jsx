import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

const sections = [
    { label: "Inicio", to: "hero" },
    { label: "Nosotros", to: "about" },
    { label: "Servicios", to: "services" },
    { label: "Noticias", to: "news" },
    { label: "Contacto", to: "contact" },
    ];

useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (<>
        <AppBar position="fixed" sx={{ backgroundColor: scrolled ? "#3B6BA5" : "transparent", transition: "0.3s",boxShadow: scrolled ? 1 : 0,}} >
        <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img src="/assets/img/logo.png" alt="Logo" width="40" />
                <Typography variant="h6">Municipalidad de Cholchol</Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((item) => (
                <ScrollLink key={item.to} to={item.to} smooth={true} duration={500}style={{ color: "white", cursor: "pointer" }}>
                {item.label}
                </ScrollLink>
            ))}
            </Box>

            <IconButton
            color="inherit"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: "none" } }}>
            <MenuIcon />
            </IconButton>
        </Toolbar>
        </AppBar>

        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
            Menú
            </Typography>
            <List>
            {sections.map((item) => (
                <ListItem button key={item.to} onClick={() => setDrawerOpen(false)}>
                <ScrollLink to={item.to} smooth={true}  duration={500} style={{ width: "100%", color: "#333", paddingLeft: "10px" }} >
                    <ListItemText primary={item.label} />
                </ScrollLink>
                </ListItem>
            ))}
            </List>
        </Box>
        </Drawer>
    </>
    );
};

export default Navbar;