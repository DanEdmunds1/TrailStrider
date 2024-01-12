// import axios from "axios"

export async function trailLoader() {
    const res = await fetch(`/api/trails`)
    return res.json()
}

export async function singleTrailLoader(trailId) {
    const res = await fetch(`/api/trails/${trailId}`)
    return res.json()
}