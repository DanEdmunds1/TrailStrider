import { useLoaderData } from "react-router-dom"


export default function AllTrails() {

    const trails = useLoaderData()
    console.log(trails)

    return (
        <>
            <h1>ALL TRAILS</h1>
            {trails.map((trail, idx) => {
                return (
                    <ul key={idx}>
                        <li>{trail.name} - {trail.id}</li>
                    </ul>
                    
                )
            })}
        </>
    )
}