import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import logoImage from '../assets/logo-img.png'
import navProfileImage from '../assets/profile-link.png'
import nightMode from '../assets/night-mode.png'
import { removeToken, getToken } from '../utils/helpers/common.js'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function NavBar() {

    const navigate = useNavigate()
    const token = getToken()

    function handleColorChange() {
        console.log("Changing Color")
    }

    function handleLogOut() {
        removeToken()
        navigate('/')
    }

    const [showLog, setShowLog] = useState(false)
    const handleLogClose = () => setShowLog(false)
    const handleLogShow = () => setShowLog(true)

    return (
        <>

        <Modal
         show={showLog}
         onHide={handleLogClose}
         backdrop="static"
         keyboard={false}>
            <Modal.Header>
                <Modal.Title>Log Out Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to Log Out?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleLogClose}>Remain Logged In</Button>
                <Button variant="danger" onClick={() => {
                    handleLogClose()
                    handleLogOut()
                }}>Log Out</Button>
            </Modal.Footer>
        </Modal>

            <section className="navbar">
                <section className="nav-left-box">
                    <Link to="/"><img className="logo-img" src={logoImage} /></Link>

                    {token ?
                    <>
                        <Link to="/profile"><img className="nav-profile-img" src={navProfileImage} /></Link>
                        <button onClick={handleLogShow}>Log Out</button>
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