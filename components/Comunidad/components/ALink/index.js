const format = (user = "") => user.replace("@", "")
export default function ALink({ base = "", user = "", children = null }) {
  const url = `https://${base}.com/${format(user)}`
  const capitalized = base[0].toUpperCase() + base.slice(1)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferer"
      title={`Ir a ${capitalized}`}
      className="transform hover:-translate-y-px -mr-1"
    >
      {children}
    </a>
  )
}
