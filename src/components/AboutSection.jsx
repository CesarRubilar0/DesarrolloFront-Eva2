import React from "react"; 
import { Container, Typography, Box } from "@mui/material"; 
const AboutSection = () => ( 
    <Box id="about" sx={{ py: 6, backgroundColor: "#f5f5f5" }}> 
    <Container> 
        <Typography variant="h4" gutterBottom> 
        Sobre Cholchol 
        </Typography> 
        <Typography variant="body1" paragraph> 
        Chol Chol o Cholchol (Mapudungún: Lugar de Cardos) es un pueblo y comuna de la zona sur de Chile, de la provincia de Cautín en la región de La Araucanía creada por ley 19.944 del 22 de abril de 2004 al segregarse de la comuna de Nueva Imperial. Limita al norte con las comunas de Galvarino y Lumaco, al este con la de Temuco, al oeste con la Comuna de Carahue y al Sur con la Comuna de Nueva Imperial. 
        Durante el proceso de ocupación de la Araucanía, el 4 de noviembre de 1881 ocurrió una sublevación Mapuche en la zona de Cholchol, Imperial y Toltén. El Coronel Gregorio Urrutia llegó a Cholchol el 10 de noviembre, donde ordenó construir un fuerte en la ruca del toqui Ancamilla, dando inicio a la fundación del pueblo que hoy conocemos como Cholchol. 
        En 1896, llegaron misioneros anglicanos como parte de la expansión de la Misión Araucanía, consolidando el carácter cultural y religioso de la comuna. 
        </Typography> 
        <Box sx={{ mt: 4 }}> 
        <iframe 
            title="Mapa Cholchol" 
            width="100%" 
            height="400" 
            frameBorder="0" 
            style={{ border: 0 }} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.636313202486!2d-72.85037918484284!3d-38.58274857960571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e9b5d4cf601d%3A0x8936e6161c4fa27!2sCholchol!5e0!3m2!1ses!2scl!4v1620184282410!5m2!1ses!2scl" 
            allowFullScreen="" 
            loading="lazy" 
        ></iframe> 
        </Box> 
    </Container> 
    </Box> 
); 

export default AboutSection; 