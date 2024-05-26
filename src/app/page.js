import Hero from "./(main)/components/Hero";
import Navbar from "./(main)/components/Navbar";
import Services from "./(main)/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
