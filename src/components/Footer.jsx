import React from "react"; 
import { Box, Container, Typography, Grid } from "@mui/material"; 
import LocationOnIcon from "@mui/icons-material/LocationOn"; 
import EmailIcon from "@mui/icons-material/Email"; 
import InfoIcon from "@mui/icons-material/Info"; 


const Footer = () => { 

    return ( 
    <Box sx={{ 
        backgroundColor: "#003366", 
        color: "#fff", 
        py: 4, 
        mt: 8,   
    }}> 
    <Container> 
        <Grid container spacing={4} justifyContent="center" alignItems="center"> 
            <Grid item xs={12} md={4} textAlign="center"> 
                <LocationOnIcon sx={{ fontSize: 30 }} /> 
            <Typography sx={{ mt: 1 }}>José Joaquín Pérez, 449, Cholchol</Typography> 
        </Grid> 
        <Grid item xs={12} md={4} textAlign="center"> 
            <EmailIcon sx={{ fontSize: 30 }} /> 
            <Typography sx={{ mt: 1 }}>secretaria-alcaldia@municholchol.cl </Typography> 
        </Grid> 
        <Grid item xs={12} md={4} textAlign="center"> 
            <InfoIcon sx={{ fontSize: 30 }} /> 
            <Typography sx={{ mt: 1 }}>452 - 734200</Typography> 
        </Grid> 
        </Grid> 
        <Typography variant="body2" align="center" sx={{ mt: 4 }}> 
        © {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados. 
        </Typography> 
    </Container> 
    </Box> 
    ); 
}; 
export default Footer; 