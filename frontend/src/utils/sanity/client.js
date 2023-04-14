import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "hg1r9hym",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skNzo0zAsZ6WGyunmoIH0ci5My59BuyxhAnqtBLzIlOiODl0AnXogDAIal973Uu4gfAP1MbzeAEXOUROtYVQqZLyKTd6EwqlZHP41RAXFyVDWs5sEs7a1mDIBwsoTJJO3XjQylnUuHaJLAKahY2XF4S9sPYhLZeBMZjkH6WY0RgqGGmXCHXg",
    projectId: "hg1r9hym",
    dataset: "production",
})