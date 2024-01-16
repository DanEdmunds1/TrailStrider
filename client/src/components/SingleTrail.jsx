import { useNavigate, useLoaderData } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { deleteTrail } from "../utils/actions/trail"
export default function SingleTrail() {

    const loadedData = useLoaderData()
    const { trail, hikers } = loadedData
    console.log(trail)
    const navigate = useNavigate()

    async function handleDelete(id) {
        console.log(id)
        try {
            const res = await deleteTrail(id)
            console.log(res.status)
            console.log(res)
            if (res?.status === 204) {
                navigate('/trails')
            } else {
                console.log('Failed to delete')
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Container fluid>
                <Row className="single-container">
                    <Col className="trail-info" xs={12} md={6} lg={4}>
                        <h1>{trail.name}</h1>
                        <section className="trail-data">
                            <button onClick={() => handleDelete(trail.id)}>
                                
                                Delete Trail</button>
                            <h2>{trail.region.name}</h2>
                            <ul>
                                <li>Distance: {trail.length}km</li>
                                <li>Elevation: {trail.elevation}m</li>
                                <li>Descent: {trail.descent}m</li>
                            </ul>
                        </section>
                        <img className="single-trail-image" src={trail.image} alt="Trail Image" />
                    </Col>
                    <Col className="hikers-reviews-side" xs={12} md={6} lg={8}>
                        <ul>
                            {hikers.map(hiker => {
                                let stride = (((hiker.height * 100) / 2.54) * 0.413) * 2.54
                                let steps = Math.ceil((trail.length * 100000) / stride)
                                let duration = (trail.length / (Number(hiker.ability) * 1.609))
                                let totalMinutes = Math.floor(duration * 60)
                                let hours = Math.floor(totalMinutes / 60)
                                let minutes = (totalMinutes % 60)


                                return (
                                    <li key={hiker.id}>{hiker.name} - {steps} steps - {hours}hrs {minutes}mins</li>
                                )
                            })}
                        </ul>
                        <h3>REVIEWS</h3>
                        {trail.reviews.map(review => {

                            return (
                                <p key={review.id}>{review.text}</p>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}