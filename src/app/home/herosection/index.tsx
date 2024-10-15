'use client'
import FilledButton from '@/components/common/buttons/filled'
import OutlinedButton from '@/components/common/buttons/outlined'
import Header from '@/components/layout/header'
import MarqueesSlider from '@/components/marquee-slider'
import useIntersectionObserver from '@/utils'
import { useRef } from 'react'
import HeroGraphics from '/public/assets/images/hero-section/hero-graphics.png'
import Image from 'next/image'
import { TRUSTEES } from '@/constants'
import Ellipse from '/public/assets/images/hero-section/ellipse.png'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { hasAppeared: isImageOnScreen } = useIntersectionObserver(ref, 0.25)

  return (
    <section className="bg-white relative px-6 md:px-10  pb-20  lg:px-[6.25rem]">
      <Image
        src={Ellipse}
        alt=""
        className="absolute top-0 right-0 z-10 lgMax:hidden"
      />
      <Header />
      <div className="grid gris-cols-1 md:grid-cols-[0.65fr_0.35fr] justify-between place-items-start lg:items-center">
        <div className="w-full md:w-4/5">
          <h2 className="font-manrope text-[2.5rem] lg:text-[3rem] z-20">
            Save time by building fast with Boldo Template
          </h2>
          <p className="text-grey font-open-sans mt-4 mdMax:text-sm 2xl:w-4/5">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex items-center gap-x-3 mt-[3.06rem]">
            <FilledButton
              title="Buy template"
              className="px-10 md:px-14 py-4 rounded-[3.5rem]"
            />
            <OutlinedButton
              title="Explore"
              className="px-10 md:px-14 h-14 rounded-[3.5rem]"
            />
          </div>
        </div>
        <div
          ref={ref}
          className={`flex justify-end transition-[opacity,transform] z-20  lgMax:mt-12 duration-500 transform ${
            isImageOnScreen
              ? '!translate-x-0 !opacity-100'
              : 'translate-x-1/2 opacity-0'
          }`}
        >
          <Image src={HeroGraphics} alt="" />
        </div>
      </div>
      <div className="px-5 md:px-10 mt-20  md:mt-[5.94rem]">
        <MarqueesSlider speed={50}>
          <div className="flex items-center ml-10 overflow-y-hidden  gap-x-4 md:gap-x-14 ">
            {TRUSTEES.map((item) => (
              <div className="flex items-center gap-x-2.5">
                <Image src={item.logo} alt="" />
                <h1 className="text-primary font-bold text-3xl font-manrope">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </MarqueesSlider>
      </div>
    </section>
  )
}
