import { gsap } from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const speed = 100

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
  gsap.to('.map', {
    scale: '1',
    ease: 'expo',
    duration: 1,
    delay: 2.8
  })
}

const initTimeLine = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.content',
      start: 'top top',
      end: '+=900px',
      pin: true,
      scrub: 0.5
    }
  })
  tl.to('.status__ready-1', { display: 'none' }, '<')
    .to('.status__ready-2', { display: 'block' })
    .fromTo('.cloud__left', { scale: '1' }, { scale: '0.8', x: '80px' }, '<')
    .fromTo('.cloud__right', { scale: '1' }, { scale: '0.8', x: '-80px' }, '<')
    .to('.status__ready-2', { display: 'none' })
    .to('.status__ready-3', { display: 'block' })
    .to('.cloud__left', { scale: '0.5', x: '160px' }, '<')
    .to('.cloud__right', { scale: '0.5', x: '-160px' }, '<')
    .to('.status__ready-3', { display: 'none' })
    .to('.status__ready-4', { display: 'block' })
    .to('.cloud__left', { scale: '0', x: '250px', opacity: '0' }, '<')
    .to('.cloud__right', { scale: '0', x: '-250px', opacity: '0' }, '<')
    .to('.status__ready-4', { opacity: '0' })
    .to('.runner__title', { opacity: '0' }, '<')
    .to('.title', { opacity: '0' })
    .to('.pole', { opacity: '0' }, '<')
    .to('.logo', { opacity: '0' }, '<')
    .to('.second__title', { opacity: '1' }, '<')
    .to('.main-logo', { opacity: '1' })
    .to('.logo-text', { opacity: '0' }, '<')
    .to('.road', { width: '45%' })
    .to('.pole', { display: 'none' }, '<')
    .to('.runner', { scale: '0.7', margin: '0 0 -25% 0' }, '<')
    .to('.runner__outside', { width: '42%', gap: '0', margin: '0' }, '<')
  // .to('.runner-1', { y: '20px' }, '<')
  // .to('.runner-2', { y: '20px' }, '<')
}

export const startAnimation = () => {
  startLoading()
  setTimeout(() => {
    initAnimation()
    initTimeLine()
  }, 2500)
}
