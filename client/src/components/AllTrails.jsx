import { useLoaderData } from "react-router-dom"

export default function AllTrails() {

    const loadedData = useLoaderData()
    const { trails, hikers } = loadedData
    console.log(trails)
    console.log(hikers[0])

    const hiker = hikers[0]

    let stride = (((hiker.height * 100) / 2.54) * 0.413) * 2.54
    console.log(hiker)
    // height in m * 100 = height in cm
    // height in cm / 2.54 = inches
    // inches * 0.413 = inches per stride
    // ans * 2.54 = cm per stride

    // steps per km = (1000 * 100) / stride
    // kph = mph * 1.609




    return (
        <>
            <h1>ALL TRAILS</h1>
            <section className="trail-card-container">
                {trails.map(trail => {
                    let steps = Math.ceil((trail.length * 100000) / stride)
                    let duration = (trail.length / (Number(hiker.ability) * 1.609))

                    let totalMinutes = Math.floor(duration * 60)
                    let hours = Math.floor(totalMinutes / 60)
                    let minutes = (totalMinutes % 60)
                    return (
                        <section key={trail.id} className="trail-card">
                            <img src="" alt={`${trail.name} Image`} />
                            <div className="trail-card-text-box">
                                {trail.name} - {trail.length}km - {steps} steps - {hours}hrs {minutes}mins
                            </div>
                        </section>
                    )
                })}
            </section>
        </>
    )
}