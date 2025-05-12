import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Service from "@/components/pages/Service";
import Attorney from "@/components/pages/Attorney";
import Journal from "@/components/pages/Journal";
import Contact from "@/components/pages/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Service/>
      <Attorney/>
      <Journal/>
      <Contact/>
    </>
  );
}
