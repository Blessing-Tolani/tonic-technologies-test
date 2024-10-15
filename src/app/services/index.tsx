import ManWalking from '/public/assets/images/services/man-walking.png'
import MenShakingHands from '/public/assets/images/services/men-shaking-hands.png'
import ManSitting from '/public/assets/images/services/man-sitting.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'

const services = [
  { imageUrl: ManWalking, title: 'Cool feature title', link: '/' },
  { imageUrl: MenShakingHands, title: 'Even cooler feature', link: '/' },
  { imageUrl: ManSitting, title: 'Cool feature title', link: '/' },
]

export default function OurServices() {
  return (
    <section className="bg-primary  px-6 md:px-10  xl:px-[12.95rem] w-full py-16 md:py-[5.13rem]">
      <div className="space-y-3 mx-auto items-center lg:w-[60%]  text-white  ">
        <p className="lg:text-xl font-open-sans text-center text-[#F1F1F1]">
          Our services
        </p>
        <h2 className="text-[1.5rem] md:text-[2.5rem] 2xl:text-[3rem] text-center">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10  gap-y-16 place-items-center mt-12 md:mt-[4.5rem]">
        {services.map((service, index) => (
          <div className="text-white " key={index}>
            <Image
              src={service.imageUrl}
              width={300}
              height={354}
              alt=""
              className="mdMax:w-full"
            />
            <p className="py-6 font-open-sans  xl:text-2xl">{service.title}</p>

            <Link
              href={service.link}
              className="border-b pb-2 w-fit items-center flex gap-x-3"
            >
              <span className="font-bold font-open-sans xl:text-xl">
                Explore page
              </span>
              <IoArrowForward size={23} className="mt-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
