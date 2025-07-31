import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forward" element={<ProtectedRoute><Forward /></ProtectedRoute>} />
            <Route path="/background" element={<ProtectedRoute><EventBackground /></ProtectedRoute>} />
            <Route path="/objectives" element={<ProtectedRoute><Objectives /></ProtectedRoute>} />
            <Route path="/description" element={<ProtectedRoute><Description /></ProtectedRoute>} />
            <Route path="/activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />
            <Route path="/sponsoring" element={<ProtectedRoute><Sponsoring /></ProtectedRoute>} />
            <Route path="/why-partner" element={<ProtectedRoute><WhyPartnerWithUs /></ProtectedRoute>} />
            <Route path="/packages" element={<ProtectedRoute><SponsoringPackages /></ProtectedRoute>} />
            <Route path="/rundown" element={<ProtectedRoute><EventRunDown /></ProtectedRoute>} />
            <Route path="/budgeting" element={<ProtectedRoute><Budgeting /></ProtectedRoute>} />
            <Route path="/make-your-mark" element={<ProtectedRoute><MakeYourMark /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
