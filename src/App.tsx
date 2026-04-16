import { Routes, Route, Outlet } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import * as Styled from "./App.styled";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Styled.AppShell>
      <Styled.AppContent>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Tools />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Styled.AppContent>
    </Styled.AppShell>
  );
}

export default App;
