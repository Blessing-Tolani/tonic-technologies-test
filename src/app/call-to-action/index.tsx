import Image from 'next/image'
import DarkEllipse from '/public/assets/images/dark-ellipse.png'

export default function CallToAction() {
  return (
    <section className=" px-6 md:px-10 xl:px-20  2xl:px-[12.95rem] my-20 md:my-[7.75rem] ">
      <div className="bg-primary relative py-[4.5rem] rounded-lg">
        <Image
          src={DarkEllipse}
          alt=""
          className="absolute top-0 right-0 z-10 "
        />
        <h2 className="text-xl relative  mx-auto z-50 md:text-[2rem] md:leading-[3.5rem] lg:text-[3rem] text-white font-manrope w-[90%] md:w-[70%] lg:w-[55%] ">
          An enterprise template to ramp up your company website
        </h2>
        <div className="flex mdMax:flex-col mdMax:gap-y-4 mx-auto w-fit md:gap-x-6 mt-[3.12rem]">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-white w-[18rem] lg:w-[23rem] focus:outline-green md:placeholder:text-lg placeholder:text-black rounded-[3.5rem] font-open-sans px-8 py-3"
          />
          <button className="bg-green mdMax:w-[18rem]  rounded-[3.5rem] z-20 w-fit font-open-sans whitespace-nowrap text-lg px-14 py-3 md:py-4 font-bold  text-primary">
            Start now
          </button>
        </div>
      </div>
    </section>
  )
}
