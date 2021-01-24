import { useState, useEffect } from "react"
import Burguer from "../Burguer"
import Select from "./Select"
export default function LeftNav({
  onFilter = () => null,
  isOpen = false,
  onClose = () => null,
}) {
  const [open, setOpen] = useState(isOpen)
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])
  return (
    <div hidden={!open} className="fixed inset-0 z-20">
      <div onClick={onClose} className="absolute bg-black opacity-50 inset-0" />
      <div className="absolute px-4 py-5 w-full h-screen max-w-xl z-10 bg-white top-0 right-0 lg:pr-24 lg:pt-8 lg:pl-8">
        <div className="flex items-center justify-end mb-2">
          <Burguer onClick={onClose}>— Cerrar</Burguer>
        </div>
        <div className="px-4 flex-grow lg:pr-0 mt-5 flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <div>Buscar en info de comunidad</div>
            <input
              onInput={({ target }) => onFilter({ input: target.value })}
              placeholder="Digitar info"
              type="text"
              className="outline-none border-2 text-xl px-4 py-2 border-black w-full"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <div>Seleccionar departamento</div>
            <Select onSelect={(departamento) => onFilter({ departamento })} />
          </div>
        </div>
      </div>
    </div>
  )
}
