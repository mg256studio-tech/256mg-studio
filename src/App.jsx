import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Philosophy from "./pages/Philosophy";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import CaseStudy from "./pages/CaseStudy";
import Message from "./pages/Message";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-paper">
      {!isHomePage && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/studio" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/message" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
