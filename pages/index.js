import { useState } from "react"
import LeftNav from "@/components/LeftNav"
import Burguer from "@/components/Burguer"
import GoTop from "@/components/GoTop"
import Head from "next/head"
import { ALL_ITEMS, DEFAULT_ITEM } from "@/components/LeftNav/components/Select"
import getComunidades from "../lib/getComunidades"
const TITLE_ID = "TITLE_ID"
import Comunidad from "@/components/Comunidad"
export default function Home({ posts = [] }) {
  const [filters, setFilters] = useState({
    input: "",
    departamento: ALL_ITEMS,
  })
  const [showNav, setShowNav] = useState(false)
  const comunidades = posts.map(({ fields }) => {
    const { departamento = "", name = "", description = "" } = fields
    const text = `${name}${departamento}${description}`.toLowerCase()
    const showAllDepas = [DEFAULT_ITEM, ALL_ITEMS].includes(
      filters.departamento
    )
    const isCurrentDepa = showAllDepas || departamento === filters.departamento
    const filterInText = text.includes(filters.input)
    if (isCurrentDepa && filterInText) {
      return <Comunidad {...fields} key={fields.name} />
    }
    return null
  })
  function updateCurrentFilters(newFilters) {
    setFilters((prev) => {
      return { ...prev, ...newFilters }
    })
  }
  return (
    <div className="relative mx-auto px-4 py-5 lg:p-12 lg:pr-24">
      <Head>
        <title>Comunidades Dev — SV</title>
        <link type="image/png" rel="shortcut icon" href="favicon.png" />
      </Head>
      <LeftNav
        onFilter={updateCurrentFilters}
        isOpen={showNav}
        onClose={() => setShowNav(false)}
      />
      <div className="flex items-center justify-end lg:-mt-4 mb-2">
        <Burguer onClick={() => setShowNav(true)}>— Filtrar</Burguer>
      </div>
      <h1 id={TITLE_ID} className="text-4xl md:text-7xl font-bold uppercase">
        🇸🇻 <Bullet /> Listado de comunidades dev en El Salvador
      </h1>
      <main
        style={{ minHeight: "20rem" }}
        className="flex flex-wrap -mx-2 mt-6 pb-20"
      >
        {comunidades}
      </main>
      <footer className="border-t pb-10 py-4 flex space-x-2">
        <FooterLink href="https://twitter.com/d3portillo">
          D3Portillo
        </FooterLink>
        <Bullet />
        <FooterLink href="https://github.com/D3Portillo/sv-comunidades">
          Github
        </FooterLink>
        <Bullet />
        <FooterLink href="/listar">Listar comunidad ✍️</FooterLink>
      </footer>
      <GoTop scrollsTo={() => window[TITLE_ID]} />
    </div>
  )
}
function FooterLink({ children = null, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferer"
      className="hover:underline"
    >
      {children}
    </a>
  )
}
function Bullet() {
  return <span>・</span>
}
export async function getStaticProps() {
  const posts = await getComunidades()
  return {
    props: {
      posts,
      revalidate: 1,
    },
  }
}