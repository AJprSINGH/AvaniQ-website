import Loader from "../components/Loader";
import BackgroundLayers from "../components/BackgroundLayers";
import Header from "../components/Header";
import AmbientField from "../components/AmbientField";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Numbers from "../components/Numbers";
import Work from "../components/Work";
import Founders from "../components/Founders";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ClientEffects from "../components/ClientEffects";

export default function Page() {
  return (
    <>
      <Loader />
      <BackgroundLayers />
      <Header />
      <AmbientField />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Technology />
        <Numbers />
        <Work />
        <Founders />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ClientEffects />
    </>
  );
}
