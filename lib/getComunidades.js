import renderToString from "next-mdx-remote/render-to-string"
const Airtable = require("airtable")
const LISTAR = "LISTAR"
const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async function getComunidades() {
  const allRecords = await table.select({}).all()
  const parsedRecords = allRecords
    .filter(({ fields: { status } }) => status === LISTAR)
    .map(async ({ id, fields }) => {
      const md = fields.description
      const { renderedOutput: description } = await renderToString(md)
      return {
        id,
        fields: {
          ...fields,
          description,
        },
      }
    })
  return await Promise.all(parsedRecords)
}
