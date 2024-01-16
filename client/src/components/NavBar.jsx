import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import logoImage from '../assets/logo-img.png'
import navProfileImage from '../assets/profile-link.png'
import nightMode from '../assets/night-mode.png'
import { removeToken, activeUser, getToken } from '../utils/helpers/common.js'

export default function NavBar() {

    const navigate = useNavigate()
    const user = activeUser()
    const token = getToken()
    console.log('TOKEN: ',token)
    console.log('USER: ',user)

    function handleColorChange() {
        console.log("Changing Color")
    }

    function handleLogOut() {
        removeToken()
        navigate('/')
    }

    return (
        <>
            <section className="navbar">
                <section className="nav-left-box">
                    <Link to="/"><img className="logo-img" src={logoImage} /></Link>

                    {token ?
                    <>
                        <Link to="/profile"><img className="nav-profile-img" src={navProfileImage} /></Link>
                        <button onClick={handleLogOut}>Log Out</button>
                        </>
                        :
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>
                    }



                </section>
                <img className="color-scheme-toggle" src={nightMode} onClick={handleColorChange} />
                <Dropdown>
                    <Dropdown.Toggle variant="danger">Navigate</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item><Link to='/'>Home</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/trails'>Trails</Link></Dropdown.Item>
                        <Dropdown.Item><Link to='/profile'>Profile</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </section>
        </>
    )
}