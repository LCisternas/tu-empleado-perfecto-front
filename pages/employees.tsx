import { useRouter } from 'next/router';
import useCompanies from '@/hooks/useCompanies';

function GeneralEmployees() {
  const { companies } = useCompanies()
  const router = useRouter();

  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-center items-center pb-10">
        <h1 className="text-3xl font-semibold text-sky-800">
          Debes seleccionar una empresa para ver a sus empleados
        </h1>
      </div>
      <div className="flex justify-around py-20">
        {
          companies.length > 0
            ?
            (
              companies.map((company) => (
                <div
                  onClick={() => router.push(`/${company.name}`)}
                  key={company.rut}
                  className="border-2 border-sky-800 rounded-lg cursor-pointer hover:bg-sky-800 transition"
                >
                  <h2 className="text-sky-800 font-bold text-2xl py-10 px-20 hover:text-white transition">
                    {company.name}
                  </h2>
                </div>
              ))
            )
            :
            (
              <div><h1>Cargando...</h1></div>
            )
        }
      </div>
    </div>
  )
}

export default GeneralEmployees;
