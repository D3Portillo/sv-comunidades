import { useEffect, useState } from "react"
import { FiChevronDown } from "react-icons/fi"
import getDepartamentos from "./getDepartamentos"
const departamentos = getDepartamentos()
export const ALL_ITEMS = "Todos los departamentos"
export const DEFAULT_ITEM = "Selecciona un Departamento"
const items = [...departamentos, ALL_ITEMS]

export default function Select({ onSelect = () => null }) {
  const [selected, setSelected] = useState(DEFAULT_ITEM)
  const opacity = selected === DEFAULT_ITEM && "opacity-25"
  useEffect(() => {
    onSelect(selected)
  }, [selected])
  return (
    <div className="relative border-2 border-black h-12">
      <div className="flex space-x-2 px-4 py-2">
        <div className={`flex-grow text-xl ${opacity}`}>{selected}</div>
        <div className="h-8 flex items-center justify-center">
          <FiChevronDown className="text-2xl" />
        </div>
      </div>
      <select className="absolute inset-0 w-full opacity-0 cursor-pointer">
        {items.map((item) => {
          return (
            <option
              key={item}
              onClick={({ target }) => setSelected(target.value)}
              value={item}
            >
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
