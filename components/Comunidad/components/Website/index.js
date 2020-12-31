export default function Website({ url }) {
  if (url) {
    const { href, host } = new URL(url)
    return (
      <span>
        Website —{" "}
        <a
          target="_blank"
          rel="noreferer noopener"
          href={href}
          className="underline text-blue-500 hover:text-blue-600"
        >
          {host}
        </a>
      </span>
    )
  }
  return null
}
