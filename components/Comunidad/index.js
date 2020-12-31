import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter, FiGithub, FiFacebook } from "react-icons/fi"
import { useState } from "react"
import ALink from "./components/ALink"
import Website from "./components/Website"
function formatUsername(username = "") {
  return username.replace("@", "")
}
export default function Comunidad({
  description,
  logo: {
    0: { url },
  },
  name,
  website,
  facebook,
  instagram,
  twitter,
  github,
}) {
  const [renders] = useState(() => ({
    twitter: twitter && (
      <ALink
        base="twitter.com"
        title="Ir al Twitter"
        user={formatUsername(twitter)}
      >
        <FiTwitter className="text-xl" />
      </ALink>
    ),
    facebook: facebook && (
      <ALink
        base="facebook.com"
        title="Ir al Facebook"
        user={formatUsername(facebook)}
      >
        <FiFacebook className="text-xl" />
      </ALink>
    ),
    instagram: instagram && (
      <ALink
        base="instagram.com"
        title="Ir al Instagram"
        user={formatUsername(instagram)}
      >
        <AiOutlineInstagram className="text-2xl" />
      </ALink>
    ),
    github: github && (
      <ALink
        base="github.com"
        title="Ir a GitHub"
        user={formatUsername(github)}
      >
        <FiGithub className="text-xl" />
      </ALink>
    ),
  }))
  return (
    <div className="w-full xl:max-w-xl p-2">
      <div className="border hover:border-black flex">
        <img
          className="w-14 h-14 lg:w-48 lg:h-48 object-cover"
          src={url}
          alt="..."
        />
        <div className="p-4 lg:max-h-48">
          <div className="lg:h-32 overflow-auto ">
            <div className="sticky w-full h-6 top-0 bg-gradient-to-b from-white to-transparent" />
            <div className="sticky top-0 -mt-6 lg:-mt-4">
              <b className="text-lg bg-white pb-1 pr-2">{name}</b>
            </div>
            <p className="mb-2 pt-2">{description}</p>
            <Website url={website} />
          </div>
          <div className="flex justify-end lg:justify-start space-x-3 items-center mt-3">
            {renders.facebook}
            {renders.instagram}
            {renders.twitter}
            {renders.github}
          </div>
        </div>
      </div>
    </div>
  )
}
