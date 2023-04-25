import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router';
import useOneCompany from "@/hooks/useOneCompany";

const NewEmployee = () => {
  const router = useRouter();
  const { name } = router.query;
  const baseURLEmployee = 'https://tep-planetscale.herokuapp.com/api/employee/'
  const [fullName, setFullName] = useState('')
  const [rut, setRut] = useState('')
  const [phone, setPhone] = useState('')

  const { companyInfo } = useOneCompany()

  const postEmployee = () => {
    const form = new FormData()
    form.append("full_name", fullName)
    form.append("company", companyInfo[0].id.toString())
    form.append("rut", rut)
    form.append("phone", phone)
    axios.post(baseURLEmployee, form).then(response => {
      if (response.status === 201) {
        router.push(`/${name}`)
      }
    }).catch(error => console.log(error))
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
        inset-x-4
        outline-none
        focus:outline-none
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
            <div className="flex items-center justify-center p-10 rounded-t">
              <h1 className="text-3xl font-semibold text-white">
                {name} - Nuevo empleado
              </h1>
            </div>

            <div className="relative p-10 flex-auto">
              <div className="flex flex-col gap-10">
                <input
                  className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
                  placeholder="Nombre"
                  type="text"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                <input
                  className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
                  placeholder="RUT"
                  type="number"
                  onChange={(e) => setRut(e.target.value)}
                  value={rut}
                />
                <input
                  className="rounded-lg py-2 placeholder:text-center text-center text-sky-800 font-semibold"
                  placeholder="Telefono"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                
              </div>
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
              onClick={postEmployee}
              >
                Registrar empleado
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewEmployee
