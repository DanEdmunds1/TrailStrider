import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'


export default function CreateHiker() {

    const res = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(res)
        if (res?.status === 201) {
            console.log('HIKER CREATED SUCCESSFULLY')
            navigate(`/profile`)
        }
    }, [res, navigate])


    return (
        <>
            <Form className='form' method="POST">
                <label hidden htmlFor="name">Name</label>
                <input type="text" name="name" placeholder='Name' />
                <label hidden htmlFor="height">Height</label>
                <input type="number" name="height" placeholder='Height' />
                <label hidden htmlFor="ability">Ability</label>
                <input type="text" name="ability" placeholder='Ability' />
                {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
                <button className="btn btn-pink" type="submit">Create</button>
            </Form>
        </>
    )
}