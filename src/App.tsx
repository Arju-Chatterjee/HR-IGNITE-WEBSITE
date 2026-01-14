import Navbar from "./components/Navbar"
import HeroSolar from "./components/HeroSolar"
import SubsidyTable from "./components/SubsidyTable"
import SystemCards from "./components/SystemCards"
import ContactCTA from "./components/ContactCTA"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSolar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        <SubsidyTable />
        <SystemCards />
      </main>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}

export default App
