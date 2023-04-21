import { useState, useCallback } from 'react';
import Modal from '../Modal';

const NewEmployeeModal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rut, setRut] = useState('');
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
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <input
        className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
        placeholder="RUT"
        onChange={(e) => setRut(e.target.value)}
        value={rut}
        disabled={isLoading}
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={false}
      title="Añade a un nuevo empleado"
      actionLabel="Añadir empleado"
      // onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  )
}

export default NewEmployeeModal;
