import FadeUpSection from '@/components/animation/FadeUpSection'
import ContactSection from './layouts/ContactSection'
import EverythingInOnePlaceSection from './layouts/EverthingInOnePlaceSection'
import Footer from './layouts/Footer'
import HeroSection from './layouts/HeroSection'
import IdeaSection from './layouts/ideaSection'
import KaiSection from './layouts/KaiSection'
import MeetHumanOSSection from './layouts/MeetHumanOSSection'
// import { SmoothCursor } from '@/components/ui/smooth-cursor'
import { SmoothCursor } from '@/components/components/ui/smooth-cursor'

export default function Home() {
  return (
    <>
      {/* <SmoothCursor /> */}
      <HeroSection />
      <FadeUpSection>
        <MeetHumanOSSection />
      </FadeUpSection>
      <FadeUpSection>
        <EverythingInOnePlaceSection />
      </FadeUpSection>
      <FadeUpSection>
        <IdeaSection />
      </FadeUpSection>
      <FadeUpSection>
        <KaiSection />
      </FadeUpSection>
      <FadeUpSection>
        <ContactSection />
      </FadeUpSection>

      <Footer />
    </>
  )
}
