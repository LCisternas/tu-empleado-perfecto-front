import { useCallback, useState } from "react";
// import useLoginModal from "@/hooks/useLoginModel";
// import useRegisterModal from "@/hooks/useRegisterModal";
// import Input from "../Input";
import Modal from "../Modal";

const CreateCompanyModal = () => {

  // const loginModal = useLoginModal();
  // const registerModal = useRegisterModal();

  const [name, setName] = useState('');
  const [direction, setDirection] = useState('');
  const [rut, setRut] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    // loginModal.onClose(); 
    // registerModal.onOpen();

  }, [isLoading])

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      // loginModal.onClose()

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const bodyContent = (
    <div className="flex flex-col gap-6">
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
        placeholder="RUT"
        onChange={(e) => setRut(e.target.value)}
        value={rut}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Telefono"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        disabled={isLoading}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={false}
      title="Crea tu empresa"
      actionLabel="Crear empresa"
      // onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  )
}

export default CreateCompanyModal;
