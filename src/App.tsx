import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Updated to relative path
import Home from "./pages/Home"; // Updated to relative path
import Features from "./pages/Features"; // Updated to relative path
import Solutions from "./pages/Solutions"; // Updated to relative path
import About from "./pages/About"; // Updated to relative path
import Contact from "./pages/Contact"; // Updated to relative path
import Demo from "./pages/Demo"; // Updated to relative path
import Pricing from "./pages/Pricing"; // Updated to relative path
import FAQ from "./pages/FAQ"; // Updated to relative path
import AuthPage from "./pages/AuthPage"; // Updated to relative path
import NotFound from "./pages/NotFound"; // Updated to relative path
import Documentation from "./pages/Documentation.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/terms_of_services";
import ScrollToHashElement from "./components/ScrollToHashElement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToHashElement />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} /> 
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/auth" element={<AuthPage />} /> 
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms_of_services" element={<TermsOfServices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
