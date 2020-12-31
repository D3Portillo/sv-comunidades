import { useEffect, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import getDepartamentos from "./getDepartamentos"
const departamentos = getDepartamentos()
export const ALL_ITEMS = "Todos los departamentos"
const items = [...departamentos, ALL_ITEMS]

export default function Select({ onSelect = () => null }) {
  const [selected, setSelected] = useState(ALL_ITEMS)
  useEffect(() => {
    onSelect(selected)
  }, [selected])
  return (
    <div className="relative border-2 border-black h-12">
      <div className="flex space-x-2 px-4 py-2">
        <div className="flex-grow text-xl">{selected}</div>
        <div className="h-8 flex items-center justify-center">
          <FiChevronDown className="text-2xl" />
        </div>
      </div>
      <select
        onChange={({ target }) => setSelected(target.value)}
        className="absolute inset-0 w-full opacity-0 cursor-pointer"
      >
        {items.map((item) => {
          return (
            <option onClick={() => setSelected(item)} key={item} value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
