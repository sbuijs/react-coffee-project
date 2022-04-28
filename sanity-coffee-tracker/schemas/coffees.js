export default {
  name: "coffee",
  title: "Coffee",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the coffee"
    },
    {
      name: "taste",
      title: "Taste",
      type: "string",
      description: "Description of the taste"
    },
    {
      name: "processing",
      title: "Processing",
      type: "string",
      description: "Processing of the coffeebeans"
    },
    {
      name: "imageUrl",
      title: "Image url",
      type: "string",
      description: "URL of the image"
    },
    {
      name: "rating",
      title: "rating",
      type: "number"
    },
    {
      name: "roastery",
      title: "roastery",
      type: "reference",
      to: { type: "roastery" }
    },
    {
      name: "method",
      title: "method",
      type: "reference",
      to: { type: "method" }
    },
    {
      name: "methods",
      title: "methods",
      type: "array",
      of: [{ type: "reference", to: { type: "method" } }]
    }
  ]
}
