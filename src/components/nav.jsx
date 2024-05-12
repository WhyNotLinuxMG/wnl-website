import Logo from '../ressources/logos_linux-tux.svg'
const Nav = () => {
    
    return <header className="navbar">
        <div className="logo">
            <div className="wnl-logo">
                <img src={Logo} height={60} width={60}/>
            </div>
            <div className="wnl-text-hidden-logo">Why not <span className='color-yellow-sea'>Linux</span></div>
        </div>
    </header>
}
export default Nav