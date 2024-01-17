import { useEffect, useState } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


export default function CreateHiker({ showHikerCreate, handleHikerCreateClose, avatars }) {

    const res = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(res)
        if (res?.status === 201) {
            console.log('HIKER CREATED SUCCESSFULLY')
            navigate(`/profile`)
        }
    }, [res, navigate])


    const [createHikerShow, setCreateHikerShow] = useState(showHikerCreate)

    useEffect(() => {
        setCreateHikerShow(showHikerCreate)
    }, [showHikerCreate])

    const [selectedImage, setSelectedImage] = useState(null);

    function selectHikerImg(img) {
        setSelectedImage(img)
    }


    return (
        <>
            <Modal
                show={createHikerShow}
                onHide={handleHikerCreateClose}
                backdrop="static"
                keyboard={false}>




                <Modal.Header>
                    <Modal.Title>Create Your Hiker</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='form' method="POST">
                        <label hidden htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='Name' />
                        <label hidden htmlFor="height">Height</label>
                        <input type="number" name="height" placeholder='Height' />
                        <label hidden htmlFor="ability">Ability</label>
                        <input type="text" name="ability" placeholder='Ability' />
                        <label hidden htmlFor="picture">Picture</label>
                        <input type="hidden" name="picture" placeholder='Picture' value={selectedImage || ''}/>
                        <div>
                            <h5>Select Avatar</h5>
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
                </div>
                        {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
                        <button className="btn btn-pink" type="submit" onClick={handleHikerCreateClose}>Create</button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}