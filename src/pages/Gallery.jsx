import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import GalleryGrid from '../components/GalleryGrid'
import Button from '../components/Button'
import PageHero from '../components/PageHero'

import heroGalleryImg from '../assets/gallery/home/home-6.jpg'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    document.title = 'Water Drilling Contractor Gallery | Easton, PA | Werner & Sons'
  }, [])

  const categories = [
    { label: 'All Photographs', value: 'All', count: 32 },
    { label: 'Well Drilling', value: 'Well Drilling', count: 6 },
    { label: 'Well Deepening', value: 'Well Deepening', count: 6 },
    { label: 'Water Treatment', value: 'Water Treatment', count: 6 },
    { label: 'Pump Installation', value: 'Pump Installation', count: 7 },
    { label: 'Equipment & Team', value: 'Equipment & Team', count: 7 },
  ]

  const categoryDescriptions = {
    All: 'Showing all 32 genuine camera photographs across our complete range of water well drilling and pump services.',
    'Well Drilling': 'Showing 6 genuine camera photographs of our heavy-duty cable tool rigs, elevated masts, and active borehole operations.',
    'Well Deepening': 'Showing 6 genuine camera photographs of deepening rigs, sounding equipment, mud shaker units, and casing cleanouts.',
    'Water Treatment': 'Showing 6 genuine camera photographs of ATS® purification systems, filtration manifolds, sediment filters, and water testing.',
    'Pump Installation': 'Showing 7 genuine camera photographs of J-Class submersible pumps, Well-X-Trol pressure tanks, and completed pumping assemblies.',
    'Equipment & Team': 'Showing 7 genuine camera photographs of our experienced drilling crews, rig maintenance facility, and heavy machinery fleet.',
  }

  return (
    <div className="bg-[#F8FAFC]">
      {/* Modernized Full-Width Photography Hero Header */}
      <PageHero
        breadcrumbText="Gallery"
        breadcrumbPath="/gallery"
        badgeText="Field Operations & Rig Showcase"
        title="Werner & Sons Project Gallery"
        description="Explore authentic photographs of our heavy-duty cable tool drilling rigs, fleet vehicles, well deepening operations, and water system installations across Easton, Pennsylvania and the surrounding region."
        backgroundImage={heroGalleryImg}
        imageAlt="Experienced Werner and Sons drilling crew and machinery on location"
        highlights={[
          '32 Genuine Project Photographs',
          'Cable Tool & Rotary Equipment Fleet',
          'Residential, Agricultural & Commercial'
        ]}
      />

      {/* Main Gallery Section */}
      <section className="py-8 sm:py-12">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none flex items-center gap-2 cursor-pointer select-none active:scale-95 ${
                  selectedCategory === cat.value
                    ? 'bg-[#133A2E] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-[#E2E8F0]/60 hover:text-[#133A2E] border border-[#E2E8F0]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                    selectedCategory === cat.value
                      ? 'bg-[#D4A338] text-[#133A2E]'
                      : 'bg-[#F8FAFC] text-[#475569]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Active Category Description Note */}
          <div className="text-center max-w-2xl mx-auto mb-10 text-xs sm:text-sm text-[#475569]">
            <p className="bg-white inline-block px-4 py-2 rounded-full border border-[#E2E8F0] shadow-2xs">
              <span className="font-semibold text-[#133A2E]">
                {selectedCategory === 'All' ? 'Complete Portfolio' : selectedCategory}:
              </span>{' '}
              {categoryDescriptions[selectedCategory]}
            </p>
          </div>

          {/* Grid with Lightbox */}
          <GalleryGrid
            key={selectedCategory}
            filterCategory={selectedCategory === 'All' ? null : selectedCategory}
          />

          {/* Authentic Footer Note */}
          <div className="mt-16 rounded-2xl bg-white border border-[#E2E8F0] p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 card-hover">
            <div className="text-left">
              <span className="text-xs uppercase font-mono font-medium text-[#D4A338] tracking-widest">
                Experience in Action
              </span>
              <h3 className="heading-serif text-2xl sm:text-3xl font-normal text-[#133A2E] mt-1">
                Have Questions About a <span className="italic">Well Project?</span>
              </h3>
              <p className="text-sm text-[#475569] mt-1 max-w-xl">
                Contact our water drilling contractor in Easton, Pennsylvania for prompt, affordable well drilling and well deepening services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Button to="/estimate-request" variant="primary" size="md" glow={true}>
                Request an Estimate
              </Button>
              <Button
                href="tel:6102585615"
                variant="outline"
                size="md"
                icon={Phone}
              >
                Call: (610) 258-5615
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
