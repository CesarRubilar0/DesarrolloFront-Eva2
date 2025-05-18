import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import ServiceDetail from "./pages/ServiceDetail";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio/:id" element={<ServiceDetail />} />
        <Route path="/noticia/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;