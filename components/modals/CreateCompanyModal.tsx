import { useCallback, useState } from "react";
import Modal from "../Modal";
import axios from "axios";

interface Props {
  isOpen: boolean;
  setIsOpen: (type: boolean) => void;
}

const CreateCompanyModal = ({ isOpen, setIsOpen }: Props) => {

  const [name, setName] = useState('');
  const [direction, setDirection] = useState('');
  const [phone, setPhone] = useState('');
  const [rut, setRut] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    setIsOpen(false)

  }, [isLoading])

  const onSubmit = useCallback(async () => {
    try {
      const form = new FormData()
      form.append('name', name)
      form.append('direction', direction)
      form.append('rut', rut)
      form.append('phone', phone)
      console.log(form)
      axios.post('http://127.0.0.1:8000/api/company/', form)

      // setIsLoading(true)
      setIsOpen(false)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Direccion"
        onChange={(e) => setDirection(e.target.value)}
        value={direction}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Telefono"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Rut"
        onChange={(e) => setRut(e.target.value)}
        value={rut}
        disabled={isLoading}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Crea tu empresa"
      actionLabel="Crear empresa"
      onClose={onToggle}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  )
}

export default CreateCompanyModal;
