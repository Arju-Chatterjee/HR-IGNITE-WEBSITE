import { useRef } from "react";
import Navbar from '../components/Navbar';
import HeroSolar from '../components/HeroSolar';
import ProjectsSlider from '../components/ProjectsSlider';
import WorkProcess from '../components/WorkProcess';
import AIChatbot from '../components/AIChatbot';
import ContactCTA from "../components/ContactCTA";
import SystemCards from "../components/SystemCards";

const Homepage: React.FC = () => {
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
            <Navbar
                onBookNowClick={handleScrollToSystems}
                onContactClick={handleScrollToContact}
            />
            <HeroSolar />
            <ProjectsSlider />
            <WorkProcess />
            <main ref={systemCardsRef} className="py-2 sm:px-6 lg:px-8">
                <SystemCards />
            </main>
            <div ref={contactRef}>
                <ContactCTA />
            </div>
            <AIChatbot />
        </div>
    );
};

export default Homepage;
