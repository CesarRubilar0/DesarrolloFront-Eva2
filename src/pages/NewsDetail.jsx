import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { Box, Typography, Container, Button } from "@mui/material";

const NewsDetail = () => {
const { id } = useParams();
const { state } = useLocation();

    return (
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" gutterBottom> {state?.title || "Detalle de la Noticia"}</Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>{state?.summary || "Resumen no disponible."}</Typography>
        <Button component={Link} to="/" variant="contained" color="primary"> Volver al inicio</Button>
    </Container>
);
}

export default NewsDetail;