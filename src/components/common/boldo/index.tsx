import Image from 'next/image'
import BoldoLogo from '/public/assets/icons/boldo-logo.svg'

export default function Boldo() {
  return (
    <div className="flex items-center gap-x-2.5">
      <Image alt="" src={BoldoLogo} />
      <h1 className="text-primary z-30 font-bold text-3xl md:text-[2.69rem] font-manrope">
        Boldo
      </h1>
    </div>
  )
}
