import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import SideBar from "./components/layout/SideBar";
import Project from "./forms/Project";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Container>
      <SideBar />
      <Project/>
      <Routes>
        <Route path="/contact" element={<Contact />} /> 
        
      </Routes>
      </Container>
      

      
    </BrowserRouter>
  );
}

export default App;
