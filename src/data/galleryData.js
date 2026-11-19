// Centralized gallery photograph database with authentic camera images
// Organized into clean categories with >= 6 photos per section

// Home Gallery (6 photos)
import home2 from '../assets/gallery/home/home-2.jpg'
import home3 from '../assets/gallery/home/home-3.jpg'
import home4 from '../assets/gallery/home/home-4.jpg'
import home5 from '../assets/gallery/home/home-5.jpg'
import home6 from '../assets/gallery/home/home-6.jpg'
import home7 from '../assets/gallery/home/home-7.jpg'

// Well Drilling Gallery (6 photos)
import drill2 from '../assets/gallery/well-drilling/drilling-2.jpg'
import drill3 from '../assets/gallery/well-drilling/drilling-3.jpg'
import drill4 from '../assets/gallery/well-drilling/drilling-4.jpg'
import drill5 from '../assets/gallery/well-drilling/drilling-5.jpg'
import drill6 from '../assets/gallery/well-drilling/drilling-6.jpg'
import drill7 from '../assets/gallery/well-drilling/drilling-7.jpg'

// Well Deepening Gallery (6 photos)
import deep1 from '../assets/gallery/well-deepening/deepening-1.jpg'
import deep2 from '../assets/gallery/well-deepening/deepening-2.jpg'
import deep3 from '../assets/gallery/well-deepening/deepening-3.jpg'
import deep4 from '../assets/gallery/well-deepening/deepening-4.jpg'
import deep5 from '../assets/gallery/well-deepening/deepening-5.jpg'
import deep6 from '../assets/gallery/well-deepening/deepening-6.jpg'

// Water Treatment Gallery (6 photos)
import treat1 from '../assets/gallery/water-treatment/treatment-1.jpg'
import treat2 from '../assets/gallery/water-treatment/treatment-2.jpg'
import treat3 from '../assets/gallery/water-treatment/treatment-3.jpg'
import treat4 from '../assets/gallery/water-treatment/treatment-4.jpg'
import treat5 from '../assets/gallery/water-treatment/treatment-5.jpg'
import treat6 from '../assets/gallery/water-treatment/treatment-6.jpg'

// Pump Installation Gallery (7 photos)
import pump1 from '../assets/gallery/pump-installation/pump-1.jpg'
import pump2 from '../assets/gallery/pump-installation/pump-2.jpg'
import pump3 from '../assets/gallery/pump-installation/pump-3.jpg'
import pump4 from '../assets/gallery/pump-installation/pump-4.jpg'
import pump5 from '../assets/gallery/pump-installation/pump-5.jpg'
import pump6 from '../assets/gallery/pump-installation/pump-6.jpg'
import pump7 from '../assets/gallery/pump-installation/pump-7.jpg'

// About Us / Fleet Gallery (7 photos)
import about1 from '../assets/gallery/about-us/about-1.jpg'
import about2 from '../assets/gallery/about-us/about-2.jpg'
import about3 from '../assets/gallery/about-us/about-3.jpg'
import about4 from '../assets/gallery/about-us/about-4.jpg'
import about5 from '../assets/gallery/about-us/about-5.jpg'
import about6 from '../assets/gallery/about-us/about-6.jpg'
import about7 from '../assets/gallery/about-us/about-7.jpg'

export const homeGalleryPhotos = [
  { id: 'h1', src: home2, title: 'Well Deepening & Boring', caption: 'Borehole servicing rig extending depth into rock aquifer', category: 'Well Deepening' },
  { id: 'h2', src: home3, title: 'Water Purification System', caption: 'Residential multi-stage water filtration and softening unit', category: 'Water Treatment' },
  { id: 'h3', src: home4, title: 'Submersible Well Pump', caption: 'Multi-stage stainless steel deep well submersible pump', category: 'Pump Installation' },
  { id: 'h4', src: home5, title: 'Pressure Storage Tank', caption: 'Heavy-duty pressure tank calibration and plumbing manifold', category: 'Pumps & Tanks' },
  { id: 'h5', src: home6, title: 'Water Well Borehole Casing', caption: 'Sanitary steel well casing and borehole head assembly', category: 'Well Drilling' },
  { id: 'h6', src: home7, title: 'Borehole Water Yield Testing', caption: 'Completed deep aquifer water supply recovery testing', category: 'Well Drilling' },
]

export const wellDrillingGalleryPhotos = [
  { id: 'wd1', src: drill2, title: 'Active Borehole Drilling Work', caption: 'Professional drillers monitoring percussion stroke and casing descent', category: 'Well Drilling' },
  { id: 'wd2', src: drill3, title: 'Elevated Drilling Mast on Location', caption: 'Mobile vertical drilling mast operating on construction site', category: 'Well Drilling' },
  { id: 'wd3', src: drill4, title: 'Mechanical Rig Drive Winch', caption: 'Precision heavy mechanical drilling drive gears and cable drum', category: 'Well Drilling' },
  { id: 'wd4', src: drill5, title: 'Well Drilling Rig in Action', caption: 'Heavy truck-mounted water well drilling rig operating on field site', category: 'Well Drilling' },
  { id: 'wd5', src: drill6, title: 'Borewell Rig Operation', caption: 'Water well rotary drilling unit boring deep into rock strata', category: 'Well Drilling' },
  { id: 'wd6', src: drill7, title: 'Mobile Drilling Station', caption: 'Complete mobile water well drilling station deployed on location', category: 'Well Drilling' },
]

export const wellDeepeningGalleryPhotos = [
  { id: 'dp1', src: deep1, title: 'Well Deepening Hoisting Rig', caption: 'Service mast hoisting tooling to deepen existing water well', category: 'Well Deepening' },
  { id: 'dp2', src: deep2, title: 'Borehole Depth Sounding', caption: 'Laser water level indicator testing aquifer drawdown and recovery', category: 'Well Deepening' },
  { id: 'dp3', src: deep3, title: 'Mud Tank & Shaker Operations', caption: 'Solids separation and sediment shaker during groundwater boring', category: 'Well Deepening' },
  { id: 'dp4', src: deep4, title: 'Bedrock Deepening Bit', caption: 'Percussion drill bit driving casing through dense limestone strata', category: 'Well Deepening' },
  { id: 'dp5', src: deep5, title: 'Well Tank Calibration', caption: 'Calibrating Well-X-Trol pre-pressurized diaphragm tank', category: 'Well Deepening' },
  { id: 'dp6', src: deep6, title: 'Well Workover Rig', caption: 'Field workover service rig performing well cleanout and maintenance', category: 'Well Deepening' },
]

export const waterTreatmentGalleryPhotos = [
  { id: 'wt1', src: treat1, title: 'ATS Whole-House Purification Tanks', caption: 'Multi-cylinder water filtration unit treating mineral hardness and sulfur smell', category: 'Water Treatment' },
  { id: 'wt2', src: treat2, title: 'Treatment Plumbing Manifold & Bypass', caption: 'Professional copper and brass plumbing with isolation and test ports', category: 'Water Treatment' },
  { id: 'wt3', src: treat3, title: 'Water Quality Testing & Analysis', caption: 'Chemical titration and mineral hardness testing for customized treatment', category: 'Water Treatment' },
  { id: 'wt4', src: treat4, title: 'Crystal Clear Drinking Water', caption: 'Pure, odor-free well water pouring cleanly from residential faucet', category: 'Water Treatment' },
  { id: 'wt5', src: treat5, title: 'Heavy-Duty Sediment Filter Housings', caption: 'Dual 20-inch filter housings trapping rust, sand, and fine sediment', category: 'Water Treatment' },
  { id: 'wt6', src: treat6, title: 'Digital Metered Control Valve', caption: 'Automated electronic backwash valve optimizing water softener efficiency', category: 'Water Treatment' },
]

export const pumpInstallationGalleryPhotos = [
  { id: 'pi1', src: pump1, title: 'J-Class Submersible Deep Well Pump', caption: 'Multi-stage stainless steel submersible pump and motor assembly', category: 'Pump Installation' },
  { id: 'pi2', src: pump2, title: 'Deep Well Pumping Head', caption: 'Deep well pumping mechanism and discharge head connection', category: 'Pump Installation' },
  { id: 'pi3', src: pump3, title: 'Well-X-Trol Pressure Tank Installation', caption: 'Heavy-gauge steel pressure storage tank paired with high-efficiency pump', category: 'Pump Installation' },
  { id: 'pi4', src: pump4, title: 'Pressure Switch & Brass Tee Manifold', caption: '40/60 PSI pressure switch, relief valve, and mechanical pressure gauge', category: 'Pump Installation' },
  { id: 'pi5', src: pump5, title: 'Water Well Pumping Station', caption: 'High-yield water pumping station with manifold pipework', category: 'Pump Installation' },
  { id: 'pi6', src: pump6, title: 'Heavy Water Pumping Equipment', caption: 'Heavy commercial and municipal grade water pump equipment', category: 'Pump Installation' },
  { id: 'pi7', src: pump7, title: 'Completed Deep Well Pump Head', caption: 'Completed well pump installation and high-pressure discharge pipe', category: 'Pump Installation' },
]

export const aboutUsGalleryPhotos = [
  { id: 'ab1', src: about1, title: 'Drilling Crew On Location', caption: 'Experienced drilling specialists managing site operations with care', category: 'Equipment & Team' },
  { id: 'ab2', src: about2, title: 'Heavy Rig Setup & Teamwork', caption: 'Heavy drilling rig tower setup on field site', category: 'Equipment & Team' },
  { id: 'ab3', src: about3, title: 'Equipment Maintenance Facility', caption: 'Rigorous preventative maintenance ensuring 24/7 rig readiness', category: 'Equipment & Team' },
  { id: 'ab4', src: about4, title: 'Construction Site Drilling Rig', caption: 'Heavy crawler drilling rig working in rugged terrain', category: 'Equipment & Team' },
  { id: 'ab5', src: about5, title: 'Rig & Excavation Fleet', caption: 'Drilling equipment and support machinery on site', category: 'Equipment & Team' },
  { id: 'ab6', src: about6, title: 'Qmatec Heavy Drilling Rig', caption: 'High-powered rock drilling machine on residential foundation', category: 'Equipment & Team' },
  { id: 'ab7', src: about7, title: 'Mobile Deep Boring Unit', caption: 'Commercial drilling rig deployed on urban construction site', category: 'Equipment & Team' },
]

// All combined photos for the Main Gallery Page
export const allMainGalleryPhotos = [
  ...wellDrillingGalleryPhotos,
  ...wellDeepeningGalleryPhotos,
  ...waterTreatmentGalleryPhotos,
  ...pumpInstallationGalleryPhotos,
  ...aboutUsGalleryPhotos,
]
