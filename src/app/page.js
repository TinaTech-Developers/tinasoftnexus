import About from "./(main)/components/About";
import ClientNeeds from "./(main)/components/ClientNeeds";
import Hero from "./(main)/components/Hero";
import Navbar from "./(main)/components/Navbar";
import Partners from "./(main)/components/Partners";
import Services from "./(main)/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ClientNeeds />
      <Partners />
    </div>
  );
}
