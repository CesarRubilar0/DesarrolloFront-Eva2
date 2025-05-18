import React from "react"; 
import { Container, Typography, Box } from "@mui/material"; 
import Slider from "react-slick"; 

const EducationDetail = () => { 
const images = [ 
    "/assets/img/beca1.png", 
    "/assets/img/beca2.png", 
    "/assets/img/beca3.png", 
    ];
    // Configuración del slider 
const settings = { 
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    }; 

return ( 
    <Container sx={{ py: 6 }}> 
        <Typography variant="h4" gutterBottom> 
        Apoyo Municipal en Educación 
        </Typography> 
        <Typography variant="body1" sx={{ mb: 4 }}> 
        100 jóvenes de Cholchol son beneficiados con becas para sus estudios superiores. 
        El Municipio de Cholchol, liderado por el alcalde Álvaro Labraña junto al Concejo municipal, 
        a través de su Programa de Becas Municipales, benefició este año 2025 a 100 estudiantes de educación superior, 
        reafirmando su compromiso con el acceso equitativo a la educación y el apoyo al desarrollo académico de jóvenes de la comuna. 
        </Typography> 
        <Typography variant="body1" sx={{ mb: 4 }}> 
        Esta iniciativa busca aliviar la carga económica de las familias y fomentar la continuidad de estudios 
        en instituciones técnico-profesionales y universitarias. 
        </Typography> 

        <Box> 
        <Slider {...settings}> 
            {images.map((src, index) => ( 
            <Box key={index} textAlign="center"> 
                <img 
                src={src} 
                alt={`Beca ${index + 1}`} 
                style={{ 
                    maxWidth: "100%", 
                    height: "auto", 
                    borderRadius: "10px", 
                }} 
                /> 
            </Box> 
            ))} 
        </Slider> 
        </Box> 
    </Container> 
    ); 
}; 
export default EducationDetail;