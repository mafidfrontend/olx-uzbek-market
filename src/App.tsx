
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './i18n';
import Layout from './components/Layout';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Categories from './pages/Categories';
import AddAd from './pages/AddAd';
import Bookings from './pages/Bookings';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/add-ad" element={<AddAd />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
