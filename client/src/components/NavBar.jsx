import { Link } from 'react-router-dom'
import logoImage from '../assets/logo-img.png'
import navProfileImage from '../assets/profile-link.png'
import nightMode from '../assets/night-mode.png'

export default function NavBar() {

function handleColorChange() {
    console.log("Changing Color")
}

    return (
        <>
            <section className="navbar">
                <section className="nav-left-box">
                    <Link to="/"><img className="logo-img" src={logoImage} /></Link>
                    <Link to="/profile"><img className="nav-profile-img" src={navProfileImage} /></Link>
                </section>
                <img className="color-scheme-toggle" src={nightMode} onClick={handleColorChange} />
            </section>
        </>
    )
}