import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios'


interface CompanyProps {
  id: number;
  name: string;
  phone: string;
  rut: string;
  direction: string;
}

function index() {
  const client = axios.create({
    baseURL: 'https://tep-planetscale.herokuapp.com/api/company'
  })

  const router = useRouter();
  const [companies, setCompanies] = useState<CompanyProps[]>([]);

  const [isOpenModal, setIsOpenModal] = useState(false);


  useEffect(() => {
    async function getCompanies() {
      const response = await client.get('/')
      setCompanies(response.data)
    }
    getCompanies()
  }, [])

  console.log(companies)

  return (
    <>
      {/* <CreateCompanyModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} /> */}
      <div className="flex justify-between p-10">
        <h1 className="text-3xl font-semibold text-sky-800">
          Empresas
        </h1>
        <button onClick={() => router.push('/newCompany')} className="bg-sky-800 text-white p-3 rounded-lg font-semibold border-2 border-sky-800 hover:bg-white hover:text-sky-800 transition">
          Crear nueva empresa
        </button>
      </div>

      <div className="flex flex-col justify-between px-10 py-2">
        {
          companies.length > 0
            ?
            (
              companies.map((company) => (
                <button key={company.id} onClick={() => router.push(`/${company.name}`)} className='flex items-center justify-between py-5 px-10 mt-5 rounded-xl bg-sky-800 text-white'>
                  <ul className="flex justify-between items-center w-full">
                    <li className="flex flex-col items-center text-lg font-semibold">
                      <span>Nombre</span>
                      {company.name}
                    </li>
                    <li className="flex flex-col items-center text-lg font-semibold">
                      <span>Direccion</span>
                      {company.direction}
                    </li>
                    <li className="flex flex-col items-center">
                      <span>RUT</span>
                      {company.rut}
                    </li>
                    <li className="flex flex-col items-center">
                      <span>Telefono</span>
                      {company.phone}
                    </li>
                  </ul>
                </button>
              ))
            )
            :
            (
              <div>
                <h3>Cargando...</h3>
              </div>
            )
        }
      </div>

    </>
  )
}

export default index;
