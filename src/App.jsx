import "./App.css";
import Accordion from "./Components/Accordion";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import SecPage from "./Components/SecPage";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'



function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <main>
        <div className="w-full bg-zinc-900 min-h-screen text-zinc-100">
        <Navbar />
        <LandingPage/>
        </div>
        <SecPage />
        <Form />
        <Accordion />
        <Footer/>
      </main>
    </>
  );
}

export default App;
