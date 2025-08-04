import Header from "@/components/Header";
import Footer from "@/components/Footer";
import App from "@/components/App";
 
 import { useState } from "react";
 
const Index = () => {
  console.log("Index component loading...");

  try {
    return (
      <div className="min-h-screen">
        <Header />
        <App />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error in Index component:", error);
    return <div>Error loading page: {error.message}</div>;
  }
};

export default Index;