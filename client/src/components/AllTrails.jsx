import { useLoaderData, Link } from "react-router-dom"
import Filters from './Filters'
import { useState, useEffect } from "react"
import CreateTrail from "./CreateTrail"

export default function AllTrails() {
    const loadedData = useLoaderData()
    const { trails, hikers } = loadedData

    const hiker = hikers[0]
    let stride = (((hiker.height * 100) / 2.54) * 0.413) * 2.54

    




    const [searchTrails, setSearchTrails] = useState([])
    const [filteredSearchTrails, setFilteredSearchTrails] = useState([])


    // height in m * 100 = height in cm
    // height in cm / 2.54 = inches
    // inches * 0.413 = inches per stride
    // ans * 2.54 = cm per stride

    // steps per km = (1000 * 100) / stride
    // kph = mph * 1.609

    useEffect(() => {
        setSearchTrails(trails)
    }, [trails])

    
    const [showCreate, setShowCreate] = useState(false)
    const handleCreateClose = () => setShowCreate(false)
    const handleCreateShow = () => setShowCreate(true)


    return (
        <>

        <CreateTrail showCreate={showCreate} handleCreateClose={handleCreateClose} />



            <h1>ALL TRAILS</h1>
            <button onClick={handleCreateShow}>Create Trail</button>
            <Filters searchTrails={searchTrails} setFilteredSearchTrails={setFilteredSearchTrails} filteredSearchTrails={filteredSearchTrails} />
            <section className="trail-card-container">
                {filteredSearchTrails.map(trail => {
                    console.log(trail)
                    let steps = Math.ceil((trail.length * 100000) / stride)
                    let duration = (trail.length / (Number(hiker.ability) * 1.609))

                    let totalMinutes = Math.floor(duration * 60)
                    let hours = Math.floor(totalMinutes / 60)
                    let minutes = (totalMinutes % 60)
                    return (
                        <Link key={trail.id} to={`/trails/${trail.id}`}>
                            <section key={trail.id} className="trail-card">
                                <img src="" alt={`${trail.name} Image`} />
                                <div className="trail-card-text-box">
                                    {trail.name} - {trail.length}km - {steps} steps - {hours}hrs {minutes}mins
                                </div>
                            </section>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}