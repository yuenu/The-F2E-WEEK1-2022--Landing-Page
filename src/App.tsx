import { useState, useRef, useLayoutEffect } from 'react'
import { Icon } from '@/components'
import { gsap } from 'gsap'
import { useLoading } from './gsap'

function App() {
  const screenRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useLoading()
    }, screenRef) // <- scopes all selector text to the root element

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="w-full min-h-screen overflow-x-hidden App bg-secondary-1"
      ref={screenRef}
    >
      {/* Loading */}
      <div className="fixed flex flex-col items-center justify-center w-full h-screen progress__container">
        <img
          src={Icon.LogoIcon}
          alt="Loading"
          className="w-[200px] -translate-y-[50px]"
        />
        <div className="w-[80%] md:w-[40%] xl:w-[30%] py-[5px] md:py-[10px] relative border-primary-1 border-[2px] rounded-2xl -translate-y-[50px] overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-full bg-primary-1 progress__bar"></div>
        </div>
      </div>
    </section>
  )
}

export default App
