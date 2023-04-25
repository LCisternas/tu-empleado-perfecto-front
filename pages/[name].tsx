import { useRouter } from 'next/router'
import useOneCompany from '@/hooks/useOneCompany'
import useEmployee from '@/hooks/useEmployee'

function Employees() {
  const router = useRouter();
  const { name } = router.query

  const { companyInfo } = useOneCompany()
  const { employees, isLoading } = useEmployee()

  return (
    <div className="flex flex-col p-10">
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-3xl font-semibold text-sky-800">
          {companyInfo[0] && companyInfo[0].name}
        </h1>
        <button onClick={() => router.push(`/newEmployee/${name}`)} className="bg-sky-800 text-white p-3 rounded-lg font-semibold border-2 border-sky-800 hover:bg-white hover:text-sky-800 transition">
          Añadir nuevo empleado
        </button>
      </div>

      <div className="flex flex-col">
        {
          isLoading ?
            (
              <div><h3>Cargando...</h3></div>
            )
            : employees.length === 0 ?
              (
                <div className='flex items-center justify-between py-5 px-10 mt-5 rounded-xl bg-sky-800 text-white'>
                  <h1 className="flex flex-col items-center text-lg font-semibold">
                    Sin empleados actuales
                  </h1>
                </div>
              ) :
              (
                employees.map((employee) => (
                  <div key={employee.id} className='flex items-center justify-between py-5 px-10 mt-5 rounded-xl bg-sky-800 text-white'>
                    <ul className="flex justify-between items-center w-full">
                      <li className="flex flex-col items-center text-lg">
                        <span className='font-semibold'>Nombre</span>
                        {employee.full_name}
                      </li>
                      <li className="flex flex-col items-center text-lg">
                        <span className='font-semibold'>Rut</span>
                        {employee.rut}
                      </li>
                      <li className="flex flex-col items-center">
                        <span className='font-semibold'>Phone</span>
                        {employee.phone}
                      </li>
                    </ul>
                  </div>
                ))
              )
        }
      </div>

    </div>
  )
}

export default Employees;
