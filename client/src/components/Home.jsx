import { Link } from 'react-router-dom'


export default function Home() {

    return (
        <>
            <section className="navbar">
                NAVBAR
            </section>
            <section className="hero">
                <h1>TrailStrider</h1>
                <h3>Your Hiking Trail Guide</h3>
            </section>
            <Link to="/trails"><i>Trails</i></Link>
        </>
    )
}