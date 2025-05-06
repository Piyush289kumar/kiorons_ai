import EverythingInOnePlaceSection from './layouts/EverthingInOnePlaceSection'
import HeroSection from './layouts/HeroSection'
import IdeaSection from './layouts/ideaSection'
import KaiSection from './layouts/KaiSection'
import MeetHumanOSSection from './layouts/MeetHumanOSSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeetHumanOSSection />
      <EverythingInOnePlaceSection />
      <IdeaSection />
      <KaiSection />
    </>
  )
}
