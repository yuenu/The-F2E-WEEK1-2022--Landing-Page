import { useState } from 'react'
import { Icon } from '@/components'

function Header() {
  const [icon, setIcon] = useState(Icon.UserDefaultIcon)
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="flex justify-between my-5 ml-10 mr-5">
        <a href="/">
          <img className="w-[200px]" src={Icon.LogoIcon} alt="" />
        </a>
        <a href="#">
          <img
            className="h-20 cursor-pointer"
            src={icon}
            alt=""
            onMouseEnter={() => setIcon(Icon.UserActiveIcon)}
            onMouseLeave={() => setIcon(Icon.UserDefaultIcon)}
          />
        </a>
      </div>
    </header>
  )
}

function Menu() {
  return (
    <div>
      <img
        className="fixed top-0 left-0 w-4 h-full"
        src={Icon.BG.BgMenuSideIcon}
        alt=""
      />
      <img
        className="fixed h-20 -translate-y-1/2 cursor-pointer left-3 top-1/2"
        src={Icon.OpenMenuIcon}
        alt=""
      />
    </div>
  )
}

function Join() {
  const [icon, setIcon] = useState(Icon.JoinIcon)
  return (
    <a href="#join" className="group">
      <div
        className="fixed text-center right-8 bottom-8"
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
      </div>
    </a>
  )
}

function TrafficLight() {
  return (
    <div className="fixed right-0 text-center -translate-y-1/2 top-1/2">
      <h3 className="text-xl font-bold tracking-[0.3rem] text-red-500 uppercase">
        Ready?
      </h3>
      <div className="relative">
        <img src={Icon.MAIN.ReadyFrameIcon} className="z-20 h-20" />
        <img
          src={Icon.MAIN.Ready3}
          className="absolute h-[2.15rem] top-6 left-[1.65rem] z-10"
        />
        <img
          src={Icon.MAIN.Ready2}
          className="absolute h-[2.15rem] top-6 left-[4.6rem] z-10"
        />
        <img
          src={Icon.MAIN.Ready1}
          className="absolute h-[2.15rem] top-6 right-12 z-10"
        />
      </div>
    </div>
  )
}

function OtherElement() {
  return (
    <div>
      <Menu />
      <Join />
      <TrafficLight />

      <Icon.MapSVG className="fixed bottom-0 left-8 w-[225px]" />

      {/* Cloud Left */}
      <img
        className="absolute w-[20%] left-52 top-[35%]"
        src={Icon.BG.BgDecoration1}
        alt=""
      />
      {/* Cloud Right */}
      <img
        className="absolute w-[25%] right-52 top-[35%]"
        src={Icon.BG.BgDecoration5}
        alt=""
      />
    </div>
  )
}

function Content() {
  return (
    <div className="relative flex justify-center w-3/4 h-screen mx-auto">
      <div className="relative z-10 w-1/3 mx-auto text-center h-fit top-20">
        <img className="" src={Icon.LogoTextIcon} alt="" />
        <h4 className="bg-heightlight-1 w-fit rounded-[20px] px-10 py-2 text-white mx-auto text-bolder text-xl">
          互動式網頁設計
        </h4>
      </div>
      <img className="absolute w-4/5 h-full" src={Icon.MAIN.StartIcon} alt="" />
      <img
        className="absolute bottom-0 left-[15%] h-[601px] z-10"
        src={Icon.CHARACTER.CharacterF2E}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[38%] h-[601px] z-10"
        src={Icon.CHARACTER.CharacterUI}
        alt=""
      />
      <img
        className="absolute bottom-0 left-[60%] h-[527px] z-10"
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

function App() {
  return (
    <div className="min-h-screen App bg-secondary-1">
      <Header />
      <OtherElement />
      <Content />
    </div>
  )
}

export default App
