import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Box, Typography, Container, Button } from "@mui/material";

const ServiceDetail = () => {
const { id } = useParams();
const { state } = useLocation();

return (
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom>
            {state?.title || "Detalle del Servicio"}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
            {state?.description || "Descripción no disponible."}
        </Typography>
            <Button component={Link} to="/" variant="contained" color="primary">Volver al inicio</Button>
    </Container>
    );
};

export default ServiceDetail;