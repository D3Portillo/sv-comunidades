export default function Website({ url }) {
  if (url) {
    const { href, host } = new URL(url)
    return (
      <span>
        Website —{" "}
        <a target="_blank" rel="noreferer noopener" href={href}>
          {host}
        </a>
      </span>
    )
  }
  return null
}
