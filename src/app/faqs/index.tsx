'use client'
import { FAQS } from '@/constants'
import { useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const FaqToggle = ({
  faqs,
  display,
  toggle,
}: {
  faqs: { id: number; name: string; details: JSX.Element }[]
  display: null | number
  toggle: (value: number) => void
}) => (
  <ul className="lg:w-[30rem] xl:w-[31.25rem]">
    {faqs.map((item: { name: string; details: JSX.Element; id: number }) => (
      <li
        key={item.id}
        className="flex  flex-col  justify-center md:my-4 cursor-pointer"
      >
        <button
          className="flex items-center focus:ring-0 border-b border-[#C4C4C4]  justify-between"
          onClick={() => toggle(item.id)}
        >
          <p className="flex py-4 group text-left font-open-sans  text-sm  md:text-xl">
            {item.name}
          </p>
          <IoIosArrowDropdownCircle
            size={30}
            className={`transform transition-transform duration-500 ${
              item.id === display ? 'rotate-180' : ''
            }`}
          />
        </button>
        <p
          className={`pt-2 overflow-hidden mdMax:text-sm transition-[max-height,color] duration-1000 max-h-0 ${
            display === item.id ? '!max-h-64' : ''
          }`}
        >
          {item.details}
        </p>
      </li>
    ))}
  </ul>
)

export default function Faqs() {
  const [display, setDisplay] = useState(-1)

  const toggleDisplay = (index: number) => {
    setDisplay(display === index ? -1 : index)
  }

  return (
    <section className="py-16  md:py-[7.5rem]  px-6 md:px-10 xl:px-20  2xl:px-[12.95rem] space-y-6 md:space-y-14">
      <img src="/assets/images/services/men-working.png" alt="" />
      <div className="flex  lgMax:flex-col  justify-between mdMax:space-y-2 ">
        <p className="font-manrope text-xl h-fit  xl:text-4xl xl:leading-[3.5rem] lg:w-[20rem] xl:w-[30rem]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <FaqToggle faqs={FAQS} display={display} toggle={toggleDisplay} />
      </div>
    </section>
  )
}
