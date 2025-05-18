import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const services = [
    {id: "Servicios Sociales", title: "Servicios Sociales", description: "Apoyo directo a familias y comunidades vulnerables.",},
    //
    {id: "Infraestructura", title: "Infraestructura", description: "Mejoramiento urbano, caminos rurales y espacios públicos.",},

    { id: "Educación y Cultura", title: "Educación y Cultura", description: "Fomento a la educación y rescate de la cultura Mapuche.",},
    ];

const ServicesSection = () => {
    return (
    <Box id="services" sx={{ py: 8, backgroundColor: "#fff" }}>
        <Typography variant="h4" align="center" gutterBottom>
        Nuestros Servicios
        </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {services.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>

        <Link to={`/servicio/${item.id}`} state={item} style={{ textDecoration: "none" }}>
            <Card sx={{ height: "100%", textAlign: "center", boxShadow: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                    {item.title}
                    </Typography>
                    <Typography variant="body2">{item.description}</Typography>
                </CardContent>
            </Card>
            </Link>
            </Grid>
        ))}
        </Grid>
    </Box>
        );
};

export default ServicesSection;