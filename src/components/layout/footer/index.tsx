import Boldo from '@/components/common/boldo'

export default function Footer() {
  return (
    <section className="font-open-sans pb-8 md:pb-20 w-full  px-6 md:px-10 xl:px-20  2xl:px-[12.95rem]">
      <div className="flex mdMax:flex-col justify-between  mdMax:gap-y-8 lgMax:gap-x-16 items-start">
        <div>
          <Boldo />
          <p className="text-grey text-sm  w-full sm:w-52 lg:w-3/5 xl:w-2/5 mt-6 sm:mt-10">
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-16 lg:gap-x-24">
          <ul className="text-sm  space-y-8 text-grey md:text-lg">
            <li className="font-bold text-black">Landings</li>
            <li>Home</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
          <ul className="text-sm  space-y-8 text-grey md:text-lg">
            <li className="font-bold text-black">Company</li>
            <li>Home</li>
            <li className="flex gap-x-1 md:gap-x-3">
              <span>Careers</span>
              <button className="bg-green text-xs md:w-[4.5rem] rounded-full  whitespace-nowrap md:text-sm  px-2 md:px-3.5 py-1 font-bold  text-primary">
                Hiring!
              </button>
            </li>
            <li>Services</li>
          </ul>
          <ul className="text-sm  space-y-8 text-grey md:text-lg">
            <li className="font-bold text-black">Resources</li>
            <li>Blog</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
      <p className="text-grey text-sm mt-8">All rights reserved.</p>
    </section>
  )
}
