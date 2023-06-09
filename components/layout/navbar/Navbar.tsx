import { useRouter } from "next/router"

const Navbar = () => {

  const router = useRouter();

  return (
    <div className="flex justify-between bg-sky-800 py-6 px-10">

      <div className="flex items-center">
        <h1 className="text-white text-2xl font-bold">
          TU EMPLEADO PERFECTO
        </h1>
      </div>

      <div className="flex items-center">
        <ul className="flex space-x-5">
          <li
            className="text-white cursor-pointer font-semibold hover:scale-110 transition"
            onClick={() => router.push('/')}
          >
            Mis Empresas
          </li>
          <li
            className="text-white cursor-pointer font-semibold hover:scale-110 transition"
            onClick={() => router.push('/employees')}
          >
            Empleados
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
