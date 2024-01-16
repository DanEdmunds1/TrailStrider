import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'


export default function CreateTrail() {
    const res = useActionData()
    const navigate = useNavigate()


    useEffect(() => {
        console.log(res)
        if (res?.status === 201) {
            console.log('CREATED SUCCESSFULLY')
            navigate(`/trails/${res.data.id}/`)
        }
    }, [res, navigate])


    return (
        <>
            <h1 className="text-center bold display-3 mb-4">Create Trail</h1>
            <Form className='form' method="POST">
                <label hidden htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Name' />

                <label hidden htmlFor="length">Length KM</label>
                <input type="number" name="length" placeholder='Length KM' />

                <label hidden htmlFor="elevation">Elevation M</label>
                <input type="number" name="elevation" placeholder='Elevation M' />

                <label hidden htmlFor="descent">Descent M</label>
                <input type="number" name="descent" placeholder='Descent M' />

                <label hidden htmlFor="description">Description</label>
                <textarea name="description" placeholder='Description'></textarea>

                <label hidden htmlFor="image">Image</label>
                <input type="text" name="image" placeholder='Image' />

                <label hidden htmlFor="region">Region</label>
                <input type="text" name="region" placeholder='Region' />

                {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}

                <button className="btn btn-pink" type="submit">Create</button>
            </Form>
        </>
    )
}