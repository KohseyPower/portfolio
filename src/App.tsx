import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import * as Styled from "./App.styled";

function App() {
  return (
    <Styled.AppShell>
      <Styled.AppContent>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Styled.AppContent>
    </Styled.AppShell>
  );
}

export default App;
