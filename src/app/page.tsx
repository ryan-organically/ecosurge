'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import './landing.css'

import HeroSection from '@/components/landing/HeroSection'
import MissionSection from '@/components/landing/MissionSection'
import LivingRecordSection from '@/components/landing/LivingRecordSection'
import OceanTechSection from '@/components/landing/OceanTechSection'
import CryosphereSection from '@/components/landing/CryosphereSection'
import TerrestrialSection from '@/components/landing/TerrestrialSection'
import FireWatchSection from '@/components/landing/FireWatchSection'
import ThesisSection from '@/components/landing/ThesisSection'
import ImpactSection from '@/components/landing/ImpactSection'
import ResearchSection from '@/components/landing/ResearchSection'
import JoinSection from '@/components/landing/JoinSection'
import FloatingNav from '@/components/landing/FloatingNav'

export default function LandingPage() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    function initAnimations() {
      if (typeof window === 'undefined' || !(window as any).gsap) {
        setTimeout(initAnimations, 100)
        return
      }

      const gsap = (window as any).gsap
      const ScrollTrigger = (window as any).ScrollTrigger
      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

      // Hero character animation
      const heroTitle = document.getElementById('heroTitle')
      const bgVideo = document.getElementById('bgVideo')
      const videoOverlay = document.querySelector('.section-hero .video-overlay')

      if (heroTitle) {
        const text = heroTitle.textContent || ''
        heroTitle.innerHTML = ''
        for (const char of text) {
          const span = document.createElement('span')
          span.className = 'char'
          span.textContent = char === ' ' ? '\u00A0' : char
          heroTitle.appendChild(span)
        }

        const tl = gsap.timeline({ delay: 0.3 })
        tl.fromTo(bgVideo, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, '<')
          .fromTo(videoOverlay, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, '<')
          .fromTo('.char',
            { yPercent: 100, rotation: 12, opacity: 0 },
            { yPercent: 0, rotation: 0, opacity: 1, duration: 0.45, stagger: 0.025, ease: 'power2.out' }, '-=0.4')
          .to('.hero-subheading', { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }, '+=0.6')
          .to('.section-hero .video-section', {
            width: '96vw', height: '96vh', left: '2vw', top: '2vh',
            borderRadius: '16px', duration: 1, ease: 'expo.out'
          }, '-=0.3')
      }

      // Scroll-triggered reveals
      if (ScrollTrigger) {
        gsap.utils.toArray('.section-inner').forEach((inner: any) => {
          gsap.fromTo(inner,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
              scrollTrigger: { trigger: inner, start: 'top 82%' }
            })
        })

        // Stagger cards
        document.querySelectorAll('.tech-card, .tri-card, .research-item, .research-featured, .stat-item, .cryo-step, .metric-row').forEach((el) => {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 88%' }
            })
        })
      }
    }

    initAnimations()
  }, [])

  return (
    <div className="landing">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" strategy="afterInteractive" />

      <FloatingNav />

      <HeroSection />
      <MissionSection />
      <LivingRecordSection />
      <OceanTechSection />
      <CryosphereSection />
      <TerrestrialSection />
      <FireWatchSection />
      <ThesisSection />
      <ImpactSection />
      <ResearchSection />
      <JoinSection />

      <footer className="landing-footer">
        <div className="section-inner">
          <p>&copy; 2025 EcoSurge. Emboldened by challenge.</p>
          <div className="footer-links">
            <a href="/blog">Blog</a>
            <a href="/archive">Species Archive</a>
            <a href="#research">Research</a>
            <a href="#join">Careers</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
