import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'

import Home from './pages/Home.jsx'
import WellDrilling from './pages/WellDrilling.jsx'
import WellDeepening from './pages/WellDeepening.jsx'
import WaterTreatment from './pages/WaterTreatment.jsx'
import Gallery from './pages/Gallery.jsx'
import EstimateRequest from './pages/EstimateRequest.jsx'
import PumpSales from './pages/PumpSales.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#475569] selection:bg-[#D4A338]/30 selection:text-[#133A2E]">
        <Header />

        <main className="flex-1 pt-[64px] sm:pt-[70px] lg:pt-[76px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/well-drilling" element={<WellDrilling />} />
            <Route path="/well-deepening" element={<WellDeepening />} />
            <Route path="/water-treatment-system" element={<WaterTreatment />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/estimate-request" element={<EstimateRequest />} />
            <Route path="/pump-sales--service---installation" element={<PumpSales />} />
            <Route path="/pump-sales" element={<PumpSales />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
