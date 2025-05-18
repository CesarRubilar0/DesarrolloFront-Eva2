import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const mockNews = [
    {
    id: 1,
    title: "Inauguración de nueva sede comunitaria",
    date: "10 mayo 2025",
    summary: "Nueva sede para vecinos del sector Los Notros, con presencia del alcalde.",
    },
    {
    id: 2,
    title: "Festival Cultural Mapuche 2025",
    date: "3 mayo 2025",
    summary: "Más de 500 asistentes disfrutaron música, gastronomía y tradiciones Mapuche.",
    },
    {
    id: 3,
    title: "Mejoras en caminos rurales",
    date: "1 mayo 2025",
    summary: "Se pavimentarán sectores priorizados por la comunidad rural.",
    },
];

const NewsSection = () => {
const [news, setNews] = useState([]);

useEffect(() => {
    setTimeout(() => { setNews(mockNews);}, 500);}, []);

return (
    <Box id="news" sx={{ py: 8, backgroundColor: "#f3f4f6" }}>
        <Container>
            <Typography variant="h4" gutterBottom>Últimas Noticias</Typography>
        <Grid container spacing={4}>
            {news.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Link to={`/noticia/${item.id}`} state={item} style={{ textDecoration: "none" }}>
                    <Card>
                    <CardContent>
                        <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="caption" display="block" sx={{ mb: 1 }}>
                            {item.date}
                            </Typography>
                        <Typography variant="body2">{item.summary}</Typography>
                    </CardContent>
                    </Card>
                </Link>
            </Grid>)
        )}
        </Grid>
        </Container>
    </Box>);
};

export default NewsSection;