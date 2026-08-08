import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { GoogleTags } from "./components/GoogleTags";
import { Seo } from "./components/Seo";
import { Footer, Nav } from "./components/Layout";
import { C, FONT } from "./lib/tokens";
import { AboutPage } from "./pages/AboutPage";
import { ApplyPage } from "./pages/ApplyPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { HoomsPage } from "./pages/HoomsPage";
import { CoachesPage } from "./pages/CoachesPage";
import { CoachingPage } from "./pages/CoachingPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { IQPage } from "./pages/IQPage";
import { PricingPage } from "./pages/PricingPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { ShopPage } from "./pages/ShopPage";
import { VideoConsultPage } from "./pages/VideoConsultPage";
import { WelcomePage } from "./pages/WelcomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { RefundPage } from "./pages/RefundPage";
import { Founding50Page } from "./pages/Founding50Page";

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
      <Seo />
      <GoogleTags />
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iq-framework" element={<IQPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/video-consult" element={<VideoConsultPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/hooms" element={<HoomsPage />} />
        <Route
          path="/about/hooman"
          element={<Navigate to="/about/hooms" replace />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/founding-50" element={<Founding50Page />} />
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
