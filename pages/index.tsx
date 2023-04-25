import { useRouter } from "next/router";
import useCompanies from "@/hooks/useCompanies";

function Index() {
  const router = useRouter();
  const { companies } = useCompanies();

  return (
    <>
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
                    <li className="flex flex-col items-center text-lg">
                      <span className='font-semibold'>Nombre</span>
                      {company.name}
                    </li>
                    <li className="flex flex-col items-center text-lg">
                      <span className='font-semibold'>Direccion</span>
                      {company.direction}
                    </li>
                    <li className="flex flex-col items-center text-lg">
                      <span className='font-semibold'>RUT</span>
                      {company.rut}
                    </li>
                    <li className="flex flex-col items-center text-lg">
                      <span className='font-semibold'>Telefono</span>
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

export default Index;
