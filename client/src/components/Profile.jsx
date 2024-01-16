import icon1 from '../assets/avatars/icon1.png'
import icon2 from '../assets/avatars/icon2.png'
import icon3 from '../assets/avatars/icon3.png'
import icon4 from '../assets/avatars/icon4.png'
import icon5 from '../assets/avatars/icon5.png'
import icon6 from '../assets/avatars/icon6.png'
import icon7 from '../assets/avatars/icon7.png'

import { useState } from 'react'

export default function Profile() {
// Set Profile Pic to local storage AND state
// Setting to state allows for real-time update of iomage when choosing
    const [userImage, setUserImage] = useState(getUserImage)
    
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







    return (
        <>
            <h1>PROFILE PAGE</h1>
            <h2>Select Avatar</h2>
            <div>
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
            </div>

            {/* Use localsotrage setting and gettign to keep the profile picture */}
            <img src={userImage} alt="Selected Image" className="avatar-img" />

        </>
    )
}