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

  const onSubmit = useCallback( async () => {
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
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        First time using Twitter?
        <span
          className="text-white cursor-pointer hover:underline ml-2"
          onClick={onToggle}
        >
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={true}
      title="Login"
      actionLabel="Sign In"
      // onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default CreateCompanyModal;
