import Navbar from "./components/Navbar"
import HeroSolar from "./components/HeroSolar"
import ProjectsSlider from "./components/ProjectsSlider"
import SubsidyTable from "./components/SubsidyTable"
import SystemCards from "./components/SystemCards"
import ContactCTA from "./components/ContactCTA"
import AIChatbot from "./components/AIChatbot"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSolar />

      {/* Projects Slider Section */}
      <ProjectsSlider />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        <SubsidyTable />
        <SystemCards />
      </main>

      {/* AI ChatBox */}
      <AIChatbot />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}

export default App
