import { BsArrowUp } from "react-icons/bs"
function animateToTop($node) {
  $node.scrollIntoView({
    behavior: "smooth",
    block: "end",
  })
}
export default function GoTop({ scrollsTo = () => ({}) }) {
  return (
    <div className="fixed bottom-0 right-0">
      <div
        onClick={() => {
          const $node = scrollsTo()
          animateToTop($node)
        }}
        title="Ir al principio"
        className="bg-black cursor-pointer group w-16 h-16 flex p-2 items-center justify-center"
      >
        <BsArrowUp className="text-white text-2xl transform group-hover:-translate-y-px group-hover:scale-105 transition-transform duration-100" />
      </div>
    </div>
  )
}
