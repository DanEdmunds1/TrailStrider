export async function getAllReviews() {
    const res = await fetch('/api/reviews')
    const reviews = await res.json()

    const res2 = await fetch('/api/hikers')
    const hikers = await res2.json()
    
    return { reviews, hikers  }
}
