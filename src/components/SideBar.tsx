import { useState } from 'react'
import BgMenuSide from '@/assets/images/bg/bg_menuSide.png'
import OpenMenuIcon from '@/assets/images/btn/btn_burger_open.png'

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`w-[135px] fixed top-0 h-full z-[99] bg-primary-1 ease-in-out duration-100
      ${isOpen ? 'left-0' : '-left-[125px]'}`}
    >
      <img
        src={BgMenuSide}
        alt=""
        className="absolute top-0 right-0 h-full w-[20px]"
      />
      <img
        src={OpenMenuIcon}
        alt=""
        className="w-[60px] h-[67px] absolute right-0 top-1/2 -translate-y-1/2 translate-x-[60px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      />
    </div>
  )
}
