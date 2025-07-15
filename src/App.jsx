import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import LogoMarquee from './components/LogoMarquee'
import SkillsSection from './components/SkillsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import VectorX from './components/vectorx'
import Blog from './components/blog'
import Career from './components/career'
import Team from './components/team'
import ContactPage from './components/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <LogoMarquee />
                <SkillsSection />
                <CaseStudiesSection />
              </>
            } />
            <Route path="/VectorX" element={<VectorX />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/career" element={<Career />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
