import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import HeroSolar from "./components/HeroSolar";
import ProjectsSlider from "./components/ProjectsSlider";
import WorkProcess from "./components/WorkProcess";
import SystemCards from "./components/SystemCards";
import ContactCTA from "./components/ContactCTA";
import AIChatbot from "./components/AIChatbot";
import { useRef } from "react";

const App: React.FC = () => {
  const systemCardsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToSystems = () => {
    systemCardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-white">

      {/* Navbar */}
      <Navbar
        onBookNowClick={handleScrollToSystems}
        onContactClick={handleScrollToContact}
      />

      {/* Hero Section */}
      <HeroSolar />

      {/* Projects / Installations */}
      <ProjectsSlider />

      {/* Work Process */}
      <WorkProcess />

      {/* Systems */}
      <main
        ref={systemCardsRef}
        className="py-2 sm:px-6 lg:px-8"
      >
        <SystemCards />
      </main>

      {/* Contact CTA */}
      <div ref={contactRef}>
        <ContactCTA />
      </div>

      {/* AI Chatbot (Floating) */}
      <AIChatbot />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="border-l-4 border-green-500 bg-green-50 shadow-lg"
      />
    </div>
  );
};

export default App;
