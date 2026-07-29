import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Nav } from "./components/Layout";
import { C, FONT } from "./lib/tokens";
import { AboutPage, HoomanPage } from "./pages/AboutPage";
import { CoachingPage } from "./pages/CoachingPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { IQPage } from "./pages/IQPage";
import { PricingPage } from "./pages/PricingPage";
import { ProgramsPage } from "./pages/ProgramsPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function SiteShell() {
  return (
    <div
      style={{
        fontFamily: FONT,
        color: C.text,
        background: C.white,
        minHeight: "100vh",
      }}
    >
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iq-framework" element={<IQPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/hooman" element={<HoomanPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteShell />
    </BrowserRouter>
  );
}
