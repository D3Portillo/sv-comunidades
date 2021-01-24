import { useMemo, useState } from "react"
import LeftNav from "@/components/LeftNav"
import Burguer from "@/components/Burguer"
import GoTop from "@/components/GoTop"
import Head from "next/head"
import { link } from "@/shared/props"
import { ALL_ITEMS } from "@/components/LeftNav/Select"
import getComunidades from "../lib/getComunidades"
import Comunidad from "@/components/Comunidad"
const TITLE_ID = "TITLE_ID"
const metas = {
  title: "Comunidades Dev — SV",
  description: "Listado de comunidades de desarrollo en El Salvador 🇸🇻",
}
export default function Home({ posts = [] }) {
  const [filters, setFilters] = useState({
    input: "",
    departamento: ALL_ITEMS,
  })
  const [showNav, setShowNav] = useState(false)
  const comunidades = useMemo(() => {
    let size = 0
    const items = posts.map(({ fields }) => {
      const { departamento = "", name = "", description = "" } = fields
      const text = `${name}${departamento}${description}`.toLowerCase()
      const isCurrentDepa = [ALL_ITEMS, departamento].includes(
        filters.departamento
      )
      const filterInText = text.includes(filters.input.toLowerCase())
      if (isCurrentDepa && filterInText) {
        ++size
        return <Comunidad {...fields} key={fields.name} />
      }
      return null
    })
    return {
      size,
      items,
    }
  }, [filters])
  const isVoid = comunidades.size === 0
  function updateCurrentFilters(newFilters) {
    setFilters((prev) => {
      return { ...prev, ...newFilters }
    })
  }
  return (
    <div className="relative mx-auto px-4 py-5 lg:p-12 lg:pr-24">
      <Head>
        <title>{metas.title}</title>
        <link type="image/png" rel="shortcut icon" href="favicon.png" />
        <meta name="description" content={metas.description} />
        <meta name="twitter:card" content={metas.description} />
        <meta name="twitter:creator" content="d3portillo" />
        <meta property="og:url" content="https://comunidades.now.sh" />
        <meta property="og:image" content="/seo.png" />
        <meta property="og:site_name" content="comunidades" />
        <meta property="og:title" content={metas.title} />
        <meta property="og:description" content={metas.description} />
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
        Listado de comunidades dev en El Salvador <Bullet /> 🇸🇻
      </h1>
      <main className="flex flex-wrap -mx-2 mt-6 pb-20">
        {comunidades.items}
        <div
          hidden={!isVoid}
          className="w-full italic line-through h-56 flex items-center justify-center"
        >
          No hay resultados que mostrar 😢
        </div>
      </main>
      <footer className="border-t pb-20 py-4 flex flex-wrap space-x-2">
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
    <a href={href} {...link._blank} className="hover:underline">
      {children}
    </a>
  )
}
const Bullet = () => <span>・</span>
export async function getStaticProps() {
  const posts = await getComunidades()
  return {
    props: {
      posts,
      revalidate: 5,
    },
  }
}
