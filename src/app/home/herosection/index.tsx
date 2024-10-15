import FilledButton from '@/components/common/buttons/filled'
import OutlinedButton from '@/components/common/buttons/outlined'
import Header from '@/components/layout/header'
import MarqueesSlider from '@/components/marquee-slider'

export default function HeroSection() {
  return (
    <section className="bg-white relative px-6 md:px-10  pb-[4.69rem]  lg:px-[6.25rem]">
      <img
        src="/assets/images/hero-section/ellipse.png"
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
        <img
          src="assets/images/hero-section/hero-graphics.png"
          alt=""
          className="z-20 lgMax:mt-10"
        />
      </div>
      <div className="px-5 md:px-10">
        <MarqueesSlider speed={50}>
          <div className="flex items-center ml-10  gap-x-4 md:gap-x-14 mt-16  md:mt-[5.94rem]">
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/boldo-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-3xl font-manrope">
                Boldo
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/presto-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-[2rem] font-work-sans">
                Presto
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/boldo-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-3xl font-manrope">
                Boldo
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/presto-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-[2rem] font-work-sans">
                Presto
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/boldo-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-3xl font-manrope">
                Boldo
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/presto-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-[2rem] font-work-sans">
                Presto
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/boldo-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-3xl font-manrope">
                Boldo
              </h1>
            </div>
            <div className="flex items-center gap-x-2.5">
              <img src="/assets/icons/presto-logo.svg" alt="boldo icon" />
              <h1 className="text-primary font-bold text-[2rem] font-work-sans">
                Presto
              </h1>
            </div>
          </div>
        </MarqueesSlider>
      </div>
    </section>
  )
}
