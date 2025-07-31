import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Forward from "./pages/Forward";
import EventBackground from "./pages/EventBackground";
import Objectives from "./pages/Objectives";
import Description from "./pages/Description";
import Activities from "./pages/Activities";
import Sponsoring from "./pages/Sponsoring";
import WhyPartnerWithUs from "./pages/WhyPartnerWithUs";
import SponsoringPackages from "./pages/SponsoringPackages";
import EventRunDown from "./pages/EventRunDown";
import Budgeting from "./pages/Budgeting";
import MakeYourMark from "./pages/MakeYourMark";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forward" element={<Forward />} />
          <Route path="/background" element={<EventBackground />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/description" element={<Description />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/sponsoring" element={<Sponsoring />} />
          <Route path="/why-partner" element={<WhyPartnerWithUs />} />
          <Route path="/packages" element={<SponsoringPackages />} />
          <Route path="/rundown" element={<EventRunDown />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/make-your-mark" element={<MakeYourMark />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
