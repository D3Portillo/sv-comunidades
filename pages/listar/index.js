import Head from "next/head"
const iframe = `<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrcnEGxn7Y0RNBB1?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="1611" style="background: transparent; border: 1px solid #ccc;"></iframe>`
export default function Listar() {
  return (
    <>
      <Head>
        <title>Listar comunidad</title>
        <link type="image/png" rel="shortcut icon" href="favicon.png" />
      </Head>
      <div
        className="border-t-2 border-black"
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
    </>
  )
}
