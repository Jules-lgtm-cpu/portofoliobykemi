import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Admin from "./components/Admin";

const isAdmin = window.location.pathname === "/admin";

export default function App() {
  if (isAdmin) return <Admin />;

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Stack />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
