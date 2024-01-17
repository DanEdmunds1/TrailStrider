import { useLoaderData } from 'react-router-dom'
import icon1 from '../assets/avatars/icon1.png'
import icon2 from '../assets/avatars/icon2.png'
import icon3 from '../assets/avatars/icon3.png'
import icon4 from '../assets/avatars/icon4.png'
import icon5 from '../assets/avatars/icon5.png'
import icon6 from '../assets/avatars/icon6.png'
import icon7 from '../assets/avatars/icon7.png'

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { activeUser } from "../utils/helpers/common.js"
import { deleteHiker } from '../utils/actions/hiker.js'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CreateHiker from './CreateHiker.jsx'

export default function Profile() {
    // Set Profile Pic to local storage AND state
    // Setting to state allows for real-time update of iomage when choosing
    const [userImage, setUserImage] = useState(getUserImage)

    const user = activeUser()
    const navigate = useNavigate()
    
    function getUserImage() {
        return localStorage.getItem('profile-pic')
    }

    function chooseUserImage(img) {
        localStorage.setItem('profile-pic', img)
        setUserImage(img)
    }

    const avatars = [
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,
        icon6,
        icon7,
    ]

    function selectHikerImg(img) {
        console.log(img)
    }



    const data = useLoaderData()
    const { reviews, hikers } = data
    console.log(hikers)

    async function handleDelete(id) {
        console.log("Delete")
        try {
            const res = await deleteHiker(id)
            console.log(res)
            if (res?.status === 302) {
                navigate('/profile')
                console.log('deleted')
            } else {
                console.log('Failedf to Delete')
            }
        } catch (error) {
            console.log(error)
        }
    }




    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showOptions, setShowOptions] = useState(false)
    const handleOptionsClose = () => setShowOptions(false)
    const handleOptionShow = () => setShowOptions(true)

    const [showHikerCreate, setShowHikerCreate] = useState(false)
    const handleHikerCreateClose = () => setShowHikerCreate(false)
    const handleHikerCreateShow = () => setShowHikerCreate(true)


    return (
        <>
        <CreateHiker showHikerCreate={showHikerCreate} handleHikerCreateClose={handleHikerCreateClose} avatars={avatars} />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                beyboard={false}>

                <Modal.Header>
                    <Modal.Title>Select Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body><div>
                    {avatars.map((img, idx) => {
                        return (
                            <img
                                key={idx}
                                src={img}
                                alt={`Avatar Image ${idx + 1}`}
                                className="avatar-img"
                                onClick={() => chooseUserImage(img)} />
                        )
                    })}
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>

            {/* <Modal
                show={showOptions}
                onHide={handleOptionsClose}
                backdrop="static"
                beyboard={false}>

                <Modal.Header>
                    <Modal.Title>Select Hiker Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body><div>
                    {avatars.map((img, idx) => {
                        return (
                            <img
                                key={idx}
                                src={img}
                                alt={`Avatar Image ${idx + 1}`}
                                className="avatar-img"
                                onClick={() => selectHikerImg(img)} />
                        )
                    })}
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleOptionsClose()
                    }}>Confirm</Button>
                </Modal.Footer>
            </Modal> */}

            {/* Use localsotrage setting and gettign to keep the profile picture */}
            <article className="profile-top">
                <div className="user-zone">
                    <img src={userImage} alt="Selected Image" className="avatar-img" />
                    <button onClick={handleShow}>Change PFP</button>
                </div>
                <section className="hiker-display">
                    <button onClick={handleHikerCreateShow}>Create Hiker</button>
                    <div className="hiker-card-box">
                        {hikers.map((hiker) => (
                            user.user_id === hiker.owner ? (
                                <>
                                    <div className="hiker-card">
                                        <img src={hiker.picture} alt="hiker img" />
                                        <p key={hiker.id}>{hiker.name}</p>
                                        <p className="hiker-options" onClick={() => {
                                            handleOptionShow()
                                        }}>&#8942;</p>
                                    </div>
                                </>
                            ) : (
                                null
                            )
                        ))}
                    </div>
                </section>
            </article>

            <section className="profile-reviews-box">
                <h3>Trails Reviewed</h3>
                <div className="profile-reviews">
                    {reviews.map(review => {
                        return (
                            <>
                                {user.user_id === review.owner ?
                                    <p key={review.id}>Trail: {review.trail} - {review.text}</p>
                                    :
                                    <></>
                                }
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
