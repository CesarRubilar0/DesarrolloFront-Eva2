import React, { useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ScrollButtons = () => {
const [showButtons, setShowButtons] = useState(false);

useEffect(() => {
    const toggleButtons = () => {
        setShowButtons(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleButtons);
    return () => window.removeEventListener("scroll", toggleButtons);}, []);

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const scrollBottom = () =>
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

return (
    <Box sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: showButtons ? "flex" : "none",
        flexDirection: "column",
        gap: 1,
        zIndex: 999,
        }}>
        <Fab color="primary" size="small" onClick={scrollTop}>
            <ArrowUpwardIcon />
        </Fab>
        <Fab color="primary" size="small" onClick={scrollBottom}>
            <ArrowDownwardIcon />
        </Fab>
    </Box>
    );
};

export default ScrollButtons;