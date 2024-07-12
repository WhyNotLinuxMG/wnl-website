import { TextOfLogo } from "../components/Components"
import { CustomIcon } from "../components/CustomIcons"

function Footer() {
  return (
    <div className="w-full border-t border-zinc-700 flex flex-col items-center ">
      <div className="w-full flex items-center justify-around py-6 md:py-10 lg:py-14">
        <TextOfLogo />
        <div className="flex items-center justify-around gap-2 md:gap-4">
          <a href="https://github.com/WhyNotLinuxMG">
            <CustomIcon name="github" size={32} />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100091340490173">
            <CustomIcon name="facebook" size={28} />
          </a>
        </div>
      </div>
      <div className="w-full border-t border-zinc-700 flex items-center justify-center py-6 md:py-10 lg:py-14 text-raven text-center px-8">
        <p>
          Copyright ©  {new Date().getFullYear()} <b>WhyNotLinuxMG</b> . Tous droits réservés.
        </p>
      </div>
    </div>
  )
}

export default Footer