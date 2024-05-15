import Logo from '../ressources/logos_linux-tux.svg'
import NavItem from './NavItem'

const Nav = () => {

    return  <header className="flex items-center justify-between py-10">
            <div>
                <div className="logo">
                    <div className="wnl-logo">
                        <img src={Logo} height={60} width={60} />
                    </div>
                    <div className="wnl-text-hidden-logo">Why not <span className='color-yellow-sea'>Linux</span></div>
                </div>
            </div>
            <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
                <NavItem>À propos</NavItem>
            </div>
        </header>
}
export default Nav
