import React from 'react'
import HeroSection from '../components/Landing/HeroSection'
import ImpactSection from '../components/Landing/ImpactSection'
import StepsSection from '../components/Landing/StepsSection'
import FooterLanding from '../components/Landing/FooterLanding'
import './LandingPage.css'

export default function LandingPage({ onNavigate }) {
  return (
    <div className="lp-wrapper">
      <HeroSection onNavigate={onNavigate} />
      <ImpactSection onNavigate={onNavigate} />
      <StepsSection />
      <FooterLanding />
    </div>
  )
}
