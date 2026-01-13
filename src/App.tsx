import ContactCTA from './components/ContactCTA'
import HeroSolar from './components/HeroSolar'
import SubsidyTable from './components/SubsidyTable'
import SystemCards from './components/SystemCards'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-blue-50">
      <HeroSolar />
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <SubsidyTable />
        <SystemCards />
      </main>
      <ContactCTA />
    </div>
  )
}

export default App
