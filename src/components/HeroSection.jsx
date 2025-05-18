import React from "react";
import { Box, Typography, Container } from "@mui/material";

const HeroSection = () => {
    return (
    <Box id="hero" sx={{
        backgroundColor: "#3B6BA5",
        color: "white",
        py: 10,
        textAlign: "center",
        }} >
        <Container>
        <Typography variant="h3" gutterBottom>
            Bienvenido a la Municipalidad de Cholchol
        </Typography>
        <Typography variant="h6">
            Comprometidos con el desarrollo local y la identidad cultural Mapuche
        </Typography>
        </Container>
    </Box>
    );
};

export default HeroSection;