import Header from "@/components/Header";
import Footer from "@/components/Footer";
import App from "@/components/App";
 
 import { useState } from "react";
 
const Index = () => {
 

  return (
    <div className="min-h-screen">
      <Header />
    
   <App />

      <Footer />
    </div>
  );
};

export default Index;