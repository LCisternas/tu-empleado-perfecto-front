import React, { useCallback } from "react";
import { AiOutlineClose } from 'react-icons/ai';
// import Button from "./Button";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal = ({
  isOpen, onClose, onSubmit,
  title, body,
  actionLabel, disabled
}: Props) => {

  // const handleClose = useCallback(() => {
  //   if (disabled) {
  //     return;
  //   }
  //   onClose();
  // }, [disabled, onClose])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    // onClose();
  }, [])

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        backdrop-blur-sm
        bg-opacity-70
      ">
        <div
          className="
            relative
            w-full
            lg:w-3/6
            my-6
            mx-auto
            lg:max-w-3xl
            h-full
            lg:h-auto
          "
        >
          <div
            className="
              h-full
              lg:h-auto
              border-0
              rounded-xl
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-sky-800
              outline-none
              focus:outline-none
            "
          >
            <div className="flex items-center justify-between p-10 rounded-t">
              <h1 className="text-3xl font-semibold text-white">{title}</h1>
              <button
                className="
                  p-1
                  ml-auto
                  border-0
                  text-white
                  hover:opacity-70
                  transition
                "
              >
                <AiOutlineClose size={20} color="white" onClick={onClose} />
              </button>
            </div>
            <div className="relative p-10 flex-auto">
              {body}
            </div>
            <div className="flex flex-col gap-2 p-10">
              <button
                className="
                  text-sky-800
                  font-bold
                  bg-white
                  rounded-xl
                  py-3
                  border-2
                  border-white
                  hover:bg-sky-800
                  hover:text-white
                  transition
                "
                onClick={onSubmit}
              >
                {actionLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
