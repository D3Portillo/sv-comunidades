import { useState } from "react"
export default function Image({ src = "", alt = "" }) {
  const [imageURL, setImageURL] = useState(alt)
  return (
    <img
      className="flex items-center justify-center flex-0 w-14 h-14 lg:w-48 lg:h-48 object-cover"
      src={imageURL}
      loading="lazy"
      onLoad={() => fetch(src).then(() => setImageURL(src))}
      alt="..."
    />
  )
}
