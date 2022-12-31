import { useRef, useLayoutEffect, useState } from 'react'
import { Icon, SVG, SideBar } from '@/components'
import { gsap } from 'gsap'
import { startAnimation } from './gsap'

const participantsData = [
  {
    id: 'Frontend Engineer',
    label: '前端工程師',
    number: 920,
    icon: Icon.CharacterF2E
  },
  {
    id: 'User Interface Designer',
    label: 'UI設計師',
    number: 110,
    icon: Icon.CharacterUI
  },
  {
    id: 'Frontend Engineer & User Interface Designer',
    label: '團體組',
    number: 41,
    icon: Icon.CharacterTeam
  }
]

function App() {
  const [userIcon, setUserIcon] = useState(Icon.UserDefault)
  const [joinIcon, setJoinIcon] = useState(Icon.Join)

  const screenRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      startAnimation()
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
          src={Icon.LoadingLogo}
          alt="Loading"
          className="w-[200px] -translate-y-[50px]"
        />
        <div className="w-[80%] md:w-[40%] xl:w-[30%] py-[5px] md:py-[10px] relative border-primary-1 border-[2px] rounded-2xl -translate-y-[50px] overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-full bg-primary-1 progress__bar"></div>
        </div>
      </div>

      <div className="hidden opacity-0 animate__container xl:block">
        {/* Map */}
        <SVG.MapSVG className="fixed scale-0 map bottom-5 left-2" />

        {/* Side Bar */}
        <SideBar />

        {/* Clouds */}
        <img
          src={Icon.Cloud1}
          alt=""
          className="cloud__left scale-0 w-1/5 fixed top-1/2 left-[10%] -translate-y-1/2 z-0"
        />
        <img
          src={Icon.Cloud2}
          alt=""
          className="cloud__right scale-0 w-1/5 fixed top-1/2 right-[10%] -translate-y-1/2 z-0"
        />

        {/* Title */}
        <h1 className="title text-[32px] text-white font-[700] tracking-[0.05rem] leading--[125%] fixed left-1/2 -translate-x-1/2 top-[30%] z-[3] bg-[#FF5136] px-[40px] py-[8px] rounded-full">
          互動式網頁設計
        </h1>

        {/* User Button */}
        <a
          rel="noreferrer"
          href="https://2022.thef2e.com/login"
          target="_blank"
          className="fixed top-[30px] right-[20px] user__info scale-0"
          onMouseEnter={() => setUserIcon(Icon.UserHover)}
          onMouseLeave={() => setUserIcon(Icon.UserDefault)}
          onMouseDown={() => setUserIcon(Icon.UserActive)}
        >
          <img src={userIcon} alt="user" width="80" height="80" />
        </a>
        {/* Join Button */}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://2022.thef2e.com/"
          className="group fixed bottom-5 right-5 w-[60px] z-[10] scale-0 join__container"
          onMouseEnter={() => setJoinIcon(Icon.JoinActive)}
          onMouseLeave={() => setJoinIcon(Icon.Join)}
        >
          <h3 className="w-full font-bold text-center duration-100 ease-in-out text-primary-1 group-hover:translate-y-3">
            JOIN
          </h3>
          <img
            src={Icon.JoinHand}
            alt=""
            className="w-[40px] mx-auto group-hover:translate-y-3 ease-in-out duration-100"
          />
          <img src={joinIcon} alt="join" className="w-full" />
        </a>

        {/* Triffic Light */}
        <img
          src={Icon.StateReady}
          alt="Ready?"
          className="fixed top-1/2 right-0 -translate-y-1/2 w-[275px] status__ready-1 scale-0"
        />
        <img
          src={Icon.StateReady1}
          alt="Step1"
          className="fixed right-0 hidden -translate-y-1/2 top-1/2 w-[275px] status__ready-2"
        />
        <img
          src={Icon.StateReady2}
          alt="Step2"
          className="fixed right-0 hidden -translate-y-1/2 top-1/2 w-[275px] status__ready-3"
        />
        <img
          src={Icon.StateReady3}
          alt="GO!!!"
          className="fixed right-0 hidden -translate-y-1/2 top-1/2 w-[275px] status__ready-4"
        />

        {/* Main Content */}
        <div className="w-full h-screen content">
          {/* Logo */}
          <img
            src={Icon.Logo}
            alt="4th the f2e"
            className="fixed w-1/6 max-w-[200px] top-2 left-2 opacity-0 main-logo"
          />
          {/* Logo Text */}
          <img
            src={Icon.LogoText}
            alt="4th the f2e"
            className="logo-text fixed w-1/2 max-w-[680px] top-[5%] left-1/2 -translate-x-1/2 z-[2]"
          />
          {/* Track */}
          <img
            src={Icon.Road}
            alt=""
            className="fixed bottom-0 w-[70vw] left-1/2 -translate-x-1/2 z-[2] road"
          />
          <img
            src={Icon.Start}
            alt=""
            className="pole h-full max-w-[70%] w-full fixed bottom-0 left-1/2 -translate-x-1/2 z-[1]"
          />
          {/* Tree Left */}
          <img
            src={Icon.Tree2}
            alt="tree-left"
            className="fixed bottom-0 left-[27%] w-[100px] tree-left scale-0"
          />
          {/* Tree Right */}
          <img
            src={Icon.Tree1}
            alt="tree-right"
            className="fixed bottom-0 right-[26.5%] w-[100px] tree-right scale-0"
          />
          <SVG.Talking className="talking__1 fixed top-[6%] left-1/2 -translate-x-1/2 opacity-0" />
          <div className="w-[70%] fixed top-[28%] left-1/2  -translate-x-1/2 flex gap-10 items-center">
            <div className="flex-1 text-[22px] font-bold text-[#FF5136] text-center flex flex-col gap-7 step__2-1 opacity-0 relative -left-[50px]">
              <h3>羨慕別人的酷酷網頁動畫？</h3>
              <img src={Icon.Question1} alt="" />
            </div>
            <div className="flex-1 text-[22px] font-bold text-[#FF5136] text-center flex flex-col gap-7 step__2-2 opacity-0 ">
              <h3>滿足不了同事的許願？</h3>
              <img src={Icon.Question2} alt="" />
            </div>
            <div className="flex-1 text-[22px] font-bold text-[#FF5136] text-center flex flex-col gap-7 step__2-3 opacity-0 relative -right-[50px]">
              <h3>動畫技能樹太雜無從下手？</h3>
              <img src={Icon.Question3} alt="" />
            </div>
          </div>
          {/* Characters */}
          <div className="fixed flex bottom-2 left-1/2 -translate-x-1/2 z-[4] w-full justify-center gap-[4vw] runner__outside">
            {participantsData.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col justify-between scale-0 runner__container"
              >
                <div className="flex flex-col items-center gap-2 text-2xl runner__title">
                  <h4 className="font-bold tracking-widest text-primary-1">
                    {item.label}
                  </h4>
                  <div className="flex justify-center text-xl w-[140px] h-[38px] gap-2 text-white rounded-full bg-primary-1 items-center">
                    <SVG.UserSVG
                      className="fill-white w-[22px] h-[22px]"
                      title="The number of participants"
                    />
                    {item.number}
                  </div>
                </div>
                <img
                  src={item.icon}
                  alt="Frontend Engineer"
                  className={`w-[280px] runner runner-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
