import { link } from "@/shared/props"

export default function Website({ url }) {
  if (url) {
    const { href, host } = new URL(url)
    return (
      <div className="border-t border-gray-200 pt-2 border-dashed pb-1">
        WEB —{"   "}
        <a {...link._blank} href={href}>
          {host}
        </a>
      </div>
    )
  }
  return null
}
