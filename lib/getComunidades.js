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
      const options = {
        mdxOptions: {
          remarkPlugins: [require("remark-truncate-links").remarkTruncateLinks],
        },
      }
      const { small, large } = fields.logo[0].thumbnails
      const { renderedOutput: description } = await renderToString(md, options)
      return {
        id,
        fields: {
          ...fields,
          logo: { large: large.url, small: small.url },
          description,
        },
      }
    })
  return await Promise.all(parsedRecords)
}
