import { useEffect, useState } from "react"

export default function Image({ src = "", alt = "" }) {
  const [imageURL, setImageURL] = useState(alt)
  useEffect(() => {
    fetch(src)
      .then((r) => r.blob())
      .then((blob) => {
        setImageURL(URL.createObjectURL(blob))
      })
  }, [src])
  return (
    <img
      className="w-14 h-14 lg:w-48 lg:h-48 object-cover"
      src={imageURL}
      loading="lazy"
      alt="..."
    />
  )
}
