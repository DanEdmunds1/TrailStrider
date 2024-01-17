import { useEffect } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from "react-router-dom"

export default function ReviewTrail() {
    const res = useActionData()
    const data = useLoaderData()
    const { trail } = data
    const navigate = useNavigate()

    useEffect(() => {
        console.log(res)
        if (res?.status === 201) {
            console.log('REVIEW SUCCESSFULLY POSTED')
            navigate(`/trails/${trail.id}/`)
        }
    }, [res, navigate, trail.id])

    return (
        <>
            <h1 className="text-center bold display-3 mb-4">Create Review</h1>
            <Form className='form' method="POST">
                <label hidden htmlFor="text">Text</label>
                <textarea name="text" placeholder='Text'></textarea>

                <label hidden htmlFor="trail">Trail</label>
                <input type="text" name="trail" value={trail.id} readOnly />


                {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}

                <button className="btn btn-pink" type="submit">Post Review</button>
            </Form>
        </>
    )
}