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

function index() {
  return (
    <>

      <div className="flex justify-between p-10">
        <h1 className="text-3xl font-semibold text-sky-800">
          Empresas
        </h1>
        <button className="bg-sky-800 text-white p-3 rounded-lg font-semibold border-2 border-sky-800 hover:bg-white hover:text-sky-800 transition">
          Crear nueva empresa
        </button>
      </div>

      <div className="flex justify-between px-10 py-2">
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
      </div>

    </>
  )
}

export default index;
