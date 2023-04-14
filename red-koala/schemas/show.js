export default {
    name: "show",
    type: "document",
    title: "TV-serie",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title"
        },
        {
            name: "reviews",
            type: "array",
            of: [{type:"review"}],
            title: "Vurderinger"
        }
    ]
}