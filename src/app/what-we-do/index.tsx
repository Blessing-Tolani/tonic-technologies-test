import FilledButton from '@/components/common/buttons/filled'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { FiFeather, FiEye, FiSun } from 'react-icons/fi'
import EnterpriseTemplates from '../templates'
import Image from 'next/image'
import WhatWeDo1 from '/public/assets/images/services/what-we-do-image1.png'
import WhatWeDo2 from '/public/assets/images/services/what-we-do-image2.png'

export default function WhatWeDo() {
  return (
    <section>
      <section className="py-16  md:py-[7.5rem]  px-6 md:px-10 xl:px-20  2xl:px-[12.95rem] space-y-20">
        <div className="flex mdMax:flex-col w-full gap-x-10 xl:gap-x-40 items-center ">
          <Image
            alt=""
            src={WhatWeDo1}
            className="w-full md:w-[20rem] lg:w-[30.8rem] "
          />
          <div className="xl:w-[40%] ">
            <p className="font-manrope text-xl mdMax:mt-4 xl:text-4xl xl:leading-[3.5rem] ">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className=" space-y-6 mt-10 mb-14">
              <div className="flex items-center gap-x-4  md:gap-x-[1.69rem]">
                <IoIosCheckmarkCircle size={40} className="text-primary" />
                <span className="lg:text-xl font-open-sans">
                  We connect our customers with the best.
                </span>
              </div>
              <div className="flex items-center gap-x-4  md:gap-x-[1.69rem]">
                <IoIosCheckmarkCircle size={40} className="text-primary" />
                <span className="lg:text-xl font-open-sans">
                  Advisor success customer launch party.
                </span>
              </div>
              <div className="flex items-center gap-x-4  md:gap-x-[1.69rem]">
                <IoIosCheckmarkCircle size={40} className="text-primary" />
                <span className="lg:text-xl font-open-sans">
                  Business-to-consumer long tail.
                </span>
              </div>
            </div>
            <FilledButton
              title="Start now"
              className="px-10 w-fit md:px-14 py-4 rounded-[3.5rem]"
            />
          </div>
        </div>
        <div className="grid  xlMax:gap-x-24 md:grid-cols-2 justify-between place-items-center mdMax:mt-8">
          <div className="mdMax:order-2">
            <p className="font-manrope text-xl mdMax:mt-4 xl:text-4xl xl:leading-[3.5rem] xl:w-3/4">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>
            <div className=" space-y-6 mt-10 font-open-sans  xl:w-3/4 font-semibold mb-14">
              <div className="flex items-center gap-x-3 text-white bg-primary px-5 py-4 rounded">
                <FiFeather className="text-white" size={20} />
                <span>We connect our customers with the best.</span>
              </div>
              <div className="flex items-center gap-x-3 shadow-[0_0_32px_0_rgba(0,0,0,0.08)]  bg-white px-5 py-4 rounded">
                <FiEye className="text-primary" size={20} />
                <span>Advisor success customer launch party.</span>
              </div>
              <div className="flex items-center gap-x-3 shadow-[0_0_32px_0_rgba(0,0,0,0.08)]   bg-white px-5 py-4 rounded">
                <FiSun className="text-primary" size={20} />
                <span>Business-to-consumer long tail.</span>
              </div>
            </div>
          </div>
          <Image
            alt=""
            src={WhatWeDo2}
            className="w-full md:w-[20rem] mdMax:order-1 lg:w-[30.8rem] "
          />
        </div>
      </section>
      <EnterpriseTemplates />
    </section>
  )
}
