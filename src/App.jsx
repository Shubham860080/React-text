import { Routes, Route } from "react-router-dom";
import TabsPage from "./pages/TabsPage";
import AccordionPage from "./pages/AccordionPage";
import Navbar from "./components/Navbar";
import "./index.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/tabs" element={<TabsPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Routes>
    </div>
  );
}

export default App;
