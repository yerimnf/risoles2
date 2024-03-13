import Image from "next/image";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
