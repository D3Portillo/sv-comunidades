export default function ALink({
  base = "",
  user = "",
  title = "",
  children = null,
}) {
  const url = `https://${base}/${user}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferer"
      title={title}
      className="transform hover:-translate-y-px -mr-1"
    >
      {children}
    </a>
  )
}
