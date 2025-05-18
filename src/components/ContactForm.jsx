import React, { useState } from "react";
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Paper,} from "@mui/material";

const ContactForm = () => {
const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
    });

const [errors, setErrors] = useState({});
const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value,}));
    };
    // Validación de formulario
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.correo) newErrors.correo = "El correo es obligatorio.";
    if (!formData.asunto) newErrors.asunto = "Asunto.";
    if (!formData.mensaje) newErrors.mensaje = "Escribe un mensaje.";

    setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Formulario enviado:", formData);
            alert("Mensaje enviado correctamente.");
            setFormData({
            nombre: "",
            correo: "",
            asunto: "",
            mensaje: "",
        });
    }
    };

    return (
    <Box id="contact" sx={{ py: 8 }}>
        <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom> Contáctanos</Typography>
            <Paper sx={{ p: 6, mt: 4 }}>
            <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
                Nombre
                <TextField label="Nombre" fullWidth
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    error={!!errors.nombre}
                    helperText={errors.nombre}
                    required/>
                Correo electrónico
                <TextField
                    label="Correo electrónico"fullWidth
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    error={!!errors.correo}
                    helperText={errors.correo}
                    required/>
                Asunto
                <TextField label="Asunto"fullWidth select
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    error={!!errors.asunto}
                    helperText={errors.asunto}
                    required>
                Opciones de asunto
                    <MenuItem value="consulta">Consulta</MenuItem>
                    <MenuItem value="felicitacion">Felicitación</MenuItem>
                    <MenuItem value="reclamo">Reclamo</MenuItem>
                    <MenuItem value="otro">Otro</MenuItem>
                </TextField>
                Dejenos un mensaje
                <TextField
                    label="Mensaje"
                    fullWidth
                    name="mensaje"
                    multiline
                    rows={5}
                    value={formData.mensaje}
                    onChange={handleChange}
                    error={!!errors.mensaje}
                    helperText={errors.mensaje}
                    required/>
                <Button type="submit" variant="contained" color="primary" size="large"> Enviar Mensaje</Button>
            </Box>
            </form>
        </Paper>
        </Container>
    </Box>
    );
};

export default ContactForm;