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
}

export const startAnimation = () => {
  startLoading()
  setTimeout(() => {
    initAnimation()
  }, 2500)
}
