import { TEMPLATES } from '@/constants'
import Image from 'next/image'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

export default function EnterpriseTemplates() {
  return (
    <section className="bg-primary  text-white  space-y-[4.56rem] py-16  md:py-[7.5rem]  px-6 md:px-10 xl:px-20  2xl:px-[12.95rem] ">
      <div className="flex items-end justify-between">
        <h2 className="text-xl md:text-[2rem] md:leading-[3.5rem] lg:text-[3rem] font-manrope md:w-[55%] ">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex gap-x-2 md:gap-x-7 items-center">
          <span className="rounded-full w-10 h-10  md:w-[4.5rem] md:h-[4.5rem] grid place-items-center bg-white">
            <IoMdArrowBack className="text-primary text-2xl md:text-4xl" />
          </span>
          <span className="rounded-full w-10 h-10 md:w-[4.5rem] md:h-[4.5rem] grid place-items-center bg-white">
            <IoMdArrowForward className="text-primary text-2xl md:text-4xl" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:grid-cols-3 gap-x-12">
        {TEMPLATES.map((item) => (
          <div
            key={item.user.fullname}
            className="rounded-xl text-primary h-fit font-open-sans shadow-[0_0_32px_0_rgba(0,0,0,0.12)] bg-white p-5 xl:p-10 space-y-10"
          >
            <p className="font-open-sans text-lg md:text-2xl xl:w-[80%]">
              “{item.description}”
            </p>
            <div className="flex gap-x-4 items-center">
              <Image src={item.user.imageUrl} width={58} height={58} alt="" />
              <p className="flex flex-col gap-y-1.5 ">
                <span className="font-bold ">{item.user.fullname}</span>
                <span className="text-sm">
                  {item.user.work} @ {item.user.company}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
