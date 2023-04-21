import { useCallback, useState } from "react";
// import useLoginModal from "@/hooks/useLoginModel";
// import useRegisterModal from "@/hooks/useRegisterModal";
// import Input from "../Input";
import Modal from "../Modal";

const CreateCompanyModal = () => {

  // const loginModal = useLoginModal();
  // const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="flex flex-col gap-4">
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Nombre"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Direccion"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
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
