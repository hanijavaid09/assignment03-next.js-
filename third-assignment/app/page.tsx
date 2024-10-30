import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contactus";
import Order from "./components/order";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
     <Contact/>
     
     <Order/>
     <Footer/>
     
    

    </div>
  )
}
