import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { writeClient } from "../utils/sanity/client"

export default function Show() {

    const {id} = useParams()
    const [show, setShow] = useState(null)

    async function getShow(id) {
        const data = await fetchAllShows(id)
        setShow(data[0])
    }

    useEffect(() => {
        getShow(id)
    }, [id])

    function saveReview(event) {
        event.preventDefault()
        const name = document.getElementById("name").value
        const rating = document.getElementById("rating").value
        const comment = document.getElementById("comment").value
        const reviewObject = {
            _type: "review",
            name: name,
            rating: Number(rating),
            comment: comment
        }

        writeClient.patch(id).setIfMissing({reviews: []})
        .append('reviews', [reviewObject]).commit().then(() => {console.log("Vurdering lagret")}).catch((error) => console.log("NOe er feil: ", error.massage))

        console.log(reviewObject)
    }

    return (
        <article>
            <h2>{show?.title}</h2>
            <ul>
        {show?.reviews?.map((r,i) => <li key={i}><p>{r.name} | Vurdering: {r.rating}</p>
        {r.comment ? <p>{r.comment}</p> : null}</li>)}
            </ul>
            <hr />

            <form>
                <p>
                    <lable htmlFor="name">Navn</lable>
                    <input type="text" name="name" id="naem"></input>
                </p>
                <p>
                    <label htmlFor="rating">Vurdering</label>
                    <select >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="comment">Kommentar</label>
                    <textarea name="comment"></textarea>
                </p>
                <button onClick={}></button>
            </form>
        </article>
    )
}