import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Company from "@/components/Company";
 
 import { useState } from "react";
 
const Index = () => {
 

  return (
    <div className="min-h-screen">
      <Header />
    
     <Company/>

      <Footer />
    </div>
  );
};

export default Index;