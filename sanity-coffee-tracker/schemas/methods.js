export default {
  name: "method",
  title: "Method",
  type: "document",
  fields: [
    {
      name: "bean_weight",
      title: "Bean Weight",
      type: "number",
      description: "Weight of coffeebeans in grams"
    },
    {
      name: "water_weight",
      title: "Water weight",
      type: "number",
      description: "Weight of coffeebeans water in grams"
    },
    {
      name: "temperature",
      title: "Temperature",
      type: "number",
      description: "In degrees celsius"
    },
    {
      name: "extraction",
      title: "Extraction",
      type: "number",
      description: "In minutes"
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Out of 5",
    },
    {
      name: "coffee",
      title: "coffee",
      type: "reference",
      to: { type: "coffee" }
    }
  ]
}
