import { AiOutlineInstagram } from "react-icons/ai"
import { FiTwitter, FiGithub, FiFacebook } from "react-icons/fi"
import { FaDiscord } from "react-icons/fa"
import { useState } from "react"
import ALink from "./components/ALink"
import Website from "./components/Website"

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
  discord,
}) {
  const [renders] = useState(() => ({
    twitter: twitter && (
      <ALink base="twitter" user={twitter}>
        <FiTwitter className="text-xl" />
      </ALink>
    ),
    facebook: facebook && (
      <ALink base="facebook" user={facebook}>
        <FiFacebook className="text-xl" />
      </ALink>
    ),
    instagram: instagram && (
      <ALink base="instagram" user={instagram}>
        <AiOutlineInstagram className="text-2xl" />
      </ALink>
    ),
    github: github && (
      <ALink base="github" user={github}>
        <FiGithub className="text-xl" />
      </ALink>
    ),
    discord: discord && (
      <a
        title="Ir a Discord"
        className="cursor-pointer transform hover:-translate-y-px"
        href={discord}
        target="_blank"
        rel="noopener noreferer"
      >
        <FaDiscord className="text-xl" />
      </a>
    ),
  }))
  return (
    <div className="w-full xl:max-w-xl p-2">
      <div className="border hover:border-black flex pt-1 lg:pt-0">
        <img
          className="w-14 h-14 lg:w-48 lg:h-48 object-cover"
          src={url}
          alt="..."
        />
        <div className="p-4 lg:max-h-48">
          <CommunityContent>
            <div className="sticky w-full h-6 top-0 bg-gradient-to-b from-white to-transparent" />
            <div className="sticky top-0 -mt-6 lg:-mt-4">
              <b className="text-lg bg-white pb-1 pr-2">{name}</b>
            </div>
            <div
              className="mb-2 pt-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <Website url={website} />
          </CommunityContent>
          <div className="flex justify-end lg:justify-start space-x-3 items-center mt-3">
            {renders.facebook}
            {renders.instagram}
            {renders.twitter}
            {renders.github}
            {renders.discord}
          </div>
        </div>
      </div>
    </div>
  )
}

function CommunityContent({ children = null }) {
  return (
    <div className="lg:h-32 overflow-auto CommunityContent">{children}</div>
  )
}
