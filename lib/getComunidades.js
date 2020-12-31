const Airtable = require("airtable")
const LISTAR = "LISTAR"

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID)

const table = base(process.env.AIRTABLE_TABLE_NAME)

export default async function getComunidades() {
  const allRecords = await table.select({}).all()
  const records = allRecords
    .map(({ id, fields }) => ({
      id,
      fields,
    }))
    .filter(({ fields: { status } }) => status === LISTAR)

  return records
}
