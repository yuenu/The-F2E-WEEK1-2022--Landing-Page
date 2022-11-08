import { useState, useRef, useLayoutEffect, ReactNode } from 'react'
import { Icon } from '@/components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const speed = 100

function Header() {
  const [icon, setIcon] = useState(Icon.UserDefaultIcon)

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <div className="flex justify-between my-5 ml-10 mr-5">
        <a href="/">
          <img className="w-[200px] " src={Icon.LogoIcon} alt="" />
        </a>
        <a href="#">
          <img
            className="h-20 cursor-pointer"
            src={icon}
            alt=""
            onMouseEnter={() => setIcon(Icon.UserHoverIcon)}
            onMouseLeave={() => setIcon(Icon.UserDefaultIcon)}
            onClick={() => setIcon(Icon.UserActiveIcon)}
          />
        </a>
      </div>
    </header>
  )
}

function Menu() {
  const [open, setOpen] = useState(false)
  return (
    <div id="menu">
      <img
        className="object-cover w-[20px] h-screen fixed"
        src={Icon.BG.BgMenuSideIcon}
        alt=""
        onClick={() => setOpen((prev) => !prev)}
      />
      <img
        className="h-20 fixed -translate-y-1/2 cursor-pointer left-3 top-1/2 z-[99]"
        src={Icon.OpenMenuIcon}
        alt=""
        onClick={() => setOpen((prev) => !prev)}
      />
    </div>
  )
}

function Join() {
  const [icon, setIcon] = useState(Icon.JoinIcon)
  return (
    <a
      href="#join"
      className="fixed text-center group right-8 bottom-8"
      onMouseEnter={() => setIcon(Icon.JoinActiveIcon)}
      onMouseLeave={() => setIcon(Icon.JoinIcon)}
    >
      <h3 className="font-bold tracking-widest text-primary-1">JOIN</h3>
      <img
        className="h-20 group-hover:translate-y-2"
        src={Icon.JoinHeadIcon}
        alt=""
      />
      <img className="h-10" src={icon} alt="" />
    </a>
  )
}

function TrafficLight() {
  const boxRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scene1 = gsap.timeline()
      ScrollTrigger.create({
        animation: scene1,
        trigger: '#green-light',
        start: 'top top',
        end: '45% 100%',
        scrub: 3
      })
      // all your animations go in here...
      scene1.to('#screen2', { duration: 1, x: 100, opacity: 0.5 })
    }, boxRef) // <- scopes all selector text to the root element

    return () => ctx.revert()
  }, [])
  return (
    <div
      className="fixed right-0 text-center -translate-y-1/2 top-1/2"
      ref={boxRef}
    >
      <h3 className="text-xl font-bold tracking-[0.3rem] text-red-500 uppercase">
        Ready?
      </h3>
      <div className="relative">
        <img
          id="green-light"
          src={Icon.MAIN.Ready3}
          className="absolute h-[2.15rem] top-6 left-[1.65rem] z-10"
        />
        <img
          id="yellow-light"
          src={Icon.MAIN.Ready2}
          className="absolute h-[2.15rem] top-6 left-[4.6rem] z-10"
        />
        <img
          id="red-light"
          src={Icon.MAIN.Ready1}
          className="absolute h-[2.15rem] top-6 right-12 z-10"
        />
        <img src={Icon.MAIN.ReadyFrameIcon} className="z-20 h-20" />
      </div>
    </div>
  )
}

function OtherElement() {
  return (
    <div className="z-10">
      <Menu />
      <Join />

      <Icon.MapSVG className="fixed bottom-0 left-8 w-[225px]" />
      {/* <TrafficLight /> */}
    </div>
  )
}

type JoinCardProps = {
  title: string
  count: number | string
}
function JoinCard({ title, count }: JoinCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 font-bold text-primary-1">
      <h4 className="text-xl">{title}</h4>
      <span className="flex items-center justify-center gap-3 px-6 py-1 text-xl text-white rounded-full w-fit bg-primary-1">
        <Icon.UserSVG className="w-5 h-5 stroke-white" />
        {count}
      </span>
    </div>
  )
}

function Content() {
  return (
    <div className="relative flex justify-center w-3/4 h-screen mx-auto">
      <div className="relative z-10 text-center  top-[1.5vw]">
        <img className="w-[35.41vw] mx-auto" src={Icon.LogoTextIcon} alt="" />
        <h4 className="px-10 py-2 mx-auto text-2xl text-white rounded-full bg-heightlight-1 w-fit text-bolder">
          互動式網頁設計
        </h4>
        <div className="flex justify-between w-[45vw] mt-10">
          <JoinCard title="前端工程師" count="920" />
          <JoinCard title="UI設計師" count="110" />
          <JoinCard title="團體組" count="41" />
        </div>
      </div>
      <img
        className="absolute w-full h-full"
        src={Icon.MAIN.StartIcon}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[15%] h-[25vw] z-10"
        src={Icon.CHARACTER.CharacterF2E}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[40%] h-[25vw] z-10"
        src={Icon.CHARACTER.CharacterUI}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[62%] h-[22vw] z-10"
        src={Icon.CHARACTER.CharacterTeam}
        alt=""
      />
      <img
        className="absolute bottom-0 w-3/4"
        src={Icon.MAIN.RoadIcon}
        alt=""
      />
    </div>
  )
}

type ScreenProps = {
  className?: string
  id?: string
  children?: ReactNode
}

function Screen({ className, id, children }: ScreenProps) {
  return (
    <div id={id} className={`min-h-screen h-[100vh] ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const screenRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    /**
     * Start Animation
     */
    const ctx = gsap.context(() => {
      const scene1 = gsap.timeline()
      ScrollTrigger.create({
        animation: scene1,
        trigger: '#screen1',
        start: '30px',
        scrub: 2,
        pin: true,
        markers: true
      })
      // 紅綠燈變紅、雲朵變小
      scene1.to('#yellow-light', { duration: 0.2, opacity: 0 }, 0)
      scene1.to('#green-light', { duration: 0.2, opacity: 0 }, 0)
      scene1.to('#traffic-heading', { duration: 0.2, opacity: 0 }, 0)
      scene1.to('#cloud-left', { scale: 0.3, x: 200 }, 0)
      scene1.to('#cloud-right', { scale: 0.3, x: -100 }, 0)

      gsap.to('#screen1', {
        scrollTrigger: {
          trigger: '.box', //觸發得物件
          start: 'top top', // (物件開始位置, 卷軸開始位置) top center bottom px
          end: '+=300', //(物件結束位置, 卷軸結束位置) , 也可以設卷軸捲動多少結束動畫(+=300)
          pin: true, // 物件執行完動畫會跟著卷軸走，類似 fixed-top
          scrub: true, // 物件動畫根據卷軸捲動程度跑
          toggleClass: 'active', // 增加移除的class，class名稱須為字串
          markers: true // 顯示標記
        }
      })
    }, screenRef) // <- scopes all selector text to the root element

    return () => ctx.revert()
  }, [])

  return (
    <div className="App bg-secondary-1" ref={screenRef}>
      <Header />
      <OtherElement />

      <Screen id="screen1">
        <Content />

        {/* TrafficLight START */}
        <div
          id="traffic"
          className="fixed right-0 text-center -translate-y-1/2 top-1/2"
        >
          <h3
            className="text-xl font-bold tracking-[0.3rem] text-red-500 uppercase"
            id="traffic-heading"
          >
            Ready?
          </h3>
          <div className="relative">
            <img
              id="red-light"
              src={Icon.MAIN.Ready3}
              className="absolute h-[2.15rem] top-6 left-[1.65rem] z-10"
            />
            <img
              id="yellow-light"
              src={Icon.MAIN.Ready2}
              className="absolute h-[2.15rem] top-6 left-[4.6rem] z-10"
            />
            <img
              id="green-light"
              src={Icon.MAIN.Ready1}
              className="absolute h-[2.15rem] top-6 right-12 z-10"
            />
            <img
              src={Icon.MAIN.ReadyFrameIcon}
              className="relative z-20 h-20"
            />
          </div>
        </div>
        {/* TrafficLight END */}

        {/* Cloud Left START */}
        <img
          id="cloud-left"
          className="absolute w-[20%] left-52 top-[35%]"
          src={Icon.BG.BgDecoration1}
          alt=""
        />
        {/* Cloud Left END */}

        {/* Cloud Right START */}
        <img
          id="cloud-right"
          className="absolute w-[25%] right-52 top-[35%]"
          src={Icon.BG.BgDecoration5}
          alt=""
        />
        {/* Cloud Right END */}
      </Screen>
      <Screen id="screen2" />
      <Screen id="screen3" />
      <Screen id="screen4" />
      <Screen id="screen5" />
      <Screen id="screen6" />
    </div>
  )
}

export default App
