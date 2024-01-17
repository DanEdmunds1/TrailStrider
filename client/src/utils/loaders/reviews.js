export async function getAllReviews() {
    const res = await fetch('/api/reviews')
    return res.json()
}