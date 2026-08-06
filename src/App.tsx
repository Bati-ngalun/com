
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster /> 
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/"            element={<Index page="home" />} />
            <Route path="/about"       element={<Index page="about" />} />
            <Route path="/waterworks"  element={<Index page="waterworks" />} />
            <Route path="/realestate"  element={<Index page="realestate" />} />
            <Route path="/agriculture" element={<Index page="agriculture" />} />
            <Route path="/foundation"  element={<Index page="foundation" />} />
            <Route path="/projects"    element={<Index page="projects" />} />
            <Route path="/careers"     element={<Index page="careers" />} />
            <Route path="/contact"     element={<Index page="contact" />} />
            <Route path="/admin"       element={<Admin />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
