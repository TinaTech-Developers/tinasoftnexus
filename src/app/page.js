import About from "./(main)/components/About";
import ClientNeeds from "./(main)/components/ClientNeeds";
import Hero from "./(main)/components/Hero";
import MainLayout from "./(main)/components/Layout";
import Navbar from "./(main)/components/Navbar";
import Partners from "./(main)/components/Partners";
import Promotion from "./(main)/components/Promotion";
import Services from "./(main)/components/Services";
import Testimonials from "./(main)/components/Testimonials";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <ClientNeeds />
      <Partners />
      {/* <Promotion /> */}
      <Testimonials />
    </MainLayout>
  );
}
