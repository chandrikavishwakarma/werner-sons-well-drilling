import { useEffect } from 'react'
import HeroBanner from '../components/HeroBanner'
import AnnouncementBar from '../components/AnnouncementBar'
import MainContent from '../components/MainContent'

export default function Home() {
  useEffect(() => {
    document.title = 'Werner & Sons Well Drilling | Water Drilling Contractor in Easton, PA'
  }, [])

  return (
    <>
      <HeroBanner />
      <AnnouncementBar />
      <MainContent />
    </>
  )
}
