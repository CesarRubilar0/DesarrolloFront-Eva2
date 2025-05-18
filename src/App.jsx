import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import TopBar from "./components/TopBar"; 
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home"; 
import NewsDetail from "./pages/NewsDetail"; 
import EducationDetail from "./pages/services/EducationDetail"; 
import SocialServicesDetail from "./pages/services/SocialServicesDetail"; 
import InfrastructureDetail from "./pages/services/InfrastructureDetail"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => { 
  return ( 
    <Router> 
      <TopBar /> 
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/noticia/:id" element={<NewsDetail />} /> 
        <Route path="/servicios/educacion" element={<EducationDetail />} /> 
        <Route path="/servicios/sociales" element={<SocialServicesDetail />} /> 
        <Route path="/servicios/infraestructura" element={<InfrastructureDetail />} /> 
      </Routes> 
    </Router> 
  ); 
}; 
  
export default App; 