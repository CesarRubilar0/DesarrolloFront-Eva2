import React from "react";
import { Box, Typography, Link } from "@mui/material";

const TopBar = () => {
    return (
    <Box
        sx={{
        backgroundColor: "#003366",
        color: "#fff",
        px: 2,
        py: 0.5,
        display: "flex",
        justifyContent: "flex-end",
        fontSize: "0.875rem",
        position: "relative",
        zIndex: 1300,
        }}>
        
        <Box sx={{ display: "flex", gap: 2 }}>
            <Link component="a" href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045" color="inherit" underline="hover"
            target="_blank" rel="noopener noreferrer"> Transparencia Activa </Link>
        <Link component="a" href="https://www.leylobby.gob.cl/instituciones/MU045" color="inherit" underline="hover"
            target="_blank" rel="noopener noreferrer">Ley Lobby</Link>
        <Link component="a" href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=498" color="inherit" underline="hover"
            target="_blank" rel="noopener noreferrer">Solicitar Información</Link>
        </Box>
    </Box>
    );
};

export default TopBar;