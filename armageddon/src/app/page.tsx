import Hero from "@/components/landing/Hero";
import Events from "@/components/landing/events/Events";
import { Sponsors } from "@/components/landing/sponsors/Sponsors";
import Schedule from "@/components/landing/Schedule"
import Contact from "@/components/contact/Contact";


export default function Home() {

  return (
    <>
    <Hero/>
    <Schedule/>
    <Events/>
    <Sponsors/>
    <Contact/>
    </>
  );
}
