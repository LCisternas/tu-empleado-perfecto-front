import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

const fakeData = [
  {
    name: 'empresa 1',
    direction: 'aa',
    rut: 123,
    phone: '452342'
  },
  {
    name: 'empresa 2',
    direction: 'ss',
    rut: 456,
    phone: '485324895'
  },
  {
    name: 'empresa 3',
    direction: 'gg',
    rut: 9859434,
    phone: '2341234'
  },
  {
    name: 'empresa 4',
    direction: 'gg',
    rut: 968472,
    phone: '2341234'
  },
]

const fakeEmployees = [
  {
    name: 'Lucas Cisternas',
    rut: '20100723-2',
    email: 'l.cisternasopazo@gmail.com'
  },
  {
    name: 'Lucas Cisternas',
    rut: '20100723-2',
    email: 'l.cisternasopazo@gmail.com'
  },
  {
    name: 'Lucas Cisternas',
    rut: '20100723-2',
    email: 'l.cisternasopazo@gmail.com'
  },
  {
    name: 'Lucas Cisternas',
    rut: '20100723-2',
    email: 'l.cisternasopazo@gmail.com'
  },
]

function employees() {
  return (
    <div className="flex flex-col p-10">

      <div className="flex justify-between items-center pb-10">
        <h1 className="text-3xl font-semibold text-sky-800">
          {/* Seleciona una empresa para ver su empleados */}
          Nombre de la empresa
        </h1>
        <button className="bg-sky-800 text-white p-3 rounded-lg font-semibold border-2 border-sky-800 hover:bg-white hover:text-sky-800 transition">
          Añadir nuevo empleado
        </button>
      </div>

      {/* <div className="flex justify-between py-20">
        {
          fakeData.map((company) => (
            <div
              key={company.rut}
              className="border-2 border-sky-800 rounded-lg cursor-pointer hover:bg-sky-800 transition">
              <h2 className="text-sky-800 font-bold text-2xl py-10 px-20 hover:text-white transition">
                {company.name}
              </h2>
            </div>
          ))
        }
      </div> */}

      <div className="flex flex-col">
        {
          fakeEmployees.map((employee, idx) => (
            <div className='flex items-center justify-between py-5 px-10 mt-5 rounded-xl bg-sky-800 text-white'>
              <ul className="flex justify-between items-center w-9/12">
                <li className="flex flex-col items-center text-lg font-semibold">
                  <span>Nombre</span>
                  {employee.name}
                </li>
                <li className="flex flex-col items-center text-lg font-semibold">
                  <span>Email</span>
                  {employee.email}
                </li>
                <li className="flex flex-col items-center">
                  <span>RUT</span>
                  {employee.rut}
                </li>
              </ul>
              <div className='flex space-x-5'>
                <button className='p-2 border-2 border-white rounded-xl hover:bg-white hover:text-sky-800 transition'>
                  <AiOutlineEdit size={20} />
                </button>
                <button className='p-2 border-2 border-white rounded-xl hover:bg-white hover:text-sky-800 transition'>
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default employees;
