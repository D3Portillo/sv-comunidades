export default function Burguer({ onClick = () => null, children = "" }) {
  return (
    <span
      onClick={onClick}
      className="z-10 cursor-pointer hover:ring p-2 -m-2 select-none"
    >
      {children}
    </span>
  )
}
