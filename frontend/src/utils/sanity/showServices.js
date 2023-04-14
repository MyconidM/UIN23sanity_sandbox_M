import { client } from "./client"

export const fetchAllShows = async () => {
    const data = await client.fetch(`*[_type == "show"]`)
    return data
}

export cpnst fetchAllShows(id) = async () ?> {
    const data = await client.fetch(`*[_type == "show" && -id == $id]{_id, title, reviews}`, {id})
})