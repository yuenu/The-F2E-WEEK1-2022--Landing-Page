import { gsap } from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const startLoading = () => {
  gsap.to('.progress__bar', {
    width: '100%',
    ease: 'power3.out',
    duration: 2.5
  })
  gsap.to('.progress__container', {
    opacity: '0',
    ease: 'power3.out',
    duration: 0.5,
    delay: 2.5
  })
}

const initAnimation = () => {
  gsap.to('.animate__container', {
    opacity: '1',
    duration: '.5',
    ease: 'power3.out'
  })
  gsap.from('.road', {
    duration: 1,
    ease: 'power3.out',
    y: '300px'
  })
  gsap.from('.pole', {
    duration: 0.5,
    ease: 'power3.out',
    yPercent: '100',
    delay: 0.3
  })
  gsap.from('.logo-text', {
    duration: 2,
    ease: 'elastic',
    y: '-300px',
    delay: 0.8
  })
  gsap.from('.title', {
    duration: 1,
    ease: 'expo',
    scale: '0',
    delay: 1.5
  })
  gsap.utils.toArray<HTMLElement>('.runner__container').forEach((item, idx) => {
    gsap.to(item, {
      duration: 1,
      ease: 'expo',
      scale: '1',
      delay: `${1.5 + idx * 0.2}`
    })
  })
  gsap.to('.cloud__left', {
    duration: 1,
    ease: 'expo',
    scale: 1,
    delay: 2.2
  })
  gsap.to('.cloud__right', {
    duration: 1,
    ease: 'expo',
    scale: 1,
    delay: 2.2
  })
  gsap.to('.status__ready-1', {
    ease: 'expo',
    duration: 1,
    scale: '1',
    delay: 2.5
  })
  gsap.to('.join__container', {
    scale: '1',
    ease: 'expo',
    duration: 1,
    delay: 2.8
  })
  gsap.to('.user__info', {
    scale: '1',
    ease: 'expo',
    duration: 1,
    delay: 2.8
  })
}

export const startAnimation = () => {
  startLoading()
  setTimeout(() => {
    initAnimation()
  }, 2500)
}
