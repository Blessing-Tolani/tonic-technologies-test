import Boldo from '@/components/common/boldo'
import OutlinedButton from '@/components/common/buttons/outlined'

export default function Header() {
  return (
    <section className="w-full py-8 md:py-14  flex justify-between items-center">
      <div>
        <Boldo />
      </div>
      <nav className="font-open-sans  z-20 list-none font-semibold  flex items-center gap-x-10 text-primary">
        <li className="mdMax:hidden cursor-pointer"> Product</li>
        <li className="mdMax:hidden cursor-pointer">Services</li>
        <li className="mdMax:hidden cursor-pointer">About</li>
        <OutlinedButton title="Log In" className="px-10  py-2 rounded-3xl" />
      </nav>
    </section>
  )
}
