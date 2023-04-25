import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

interface EmployeeByCompanyProps {
  company: number;
  full_name: string;
  id: number;
  rut: string;
  phone: string;
}

const useEmployee = () => {
  const [employees, setEmployees] = useState<EmployeeByCompanyProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter();
  const { name } = router.query;
  const baseURLEmployee = 'https://tep-planetscale.herokuapp.com/api/employee'

  const getEmployeesByCompany = async () => {
    const response = await axios.get(`${baseURLEmployee}/?company__name=${name}`)
    console.log(response)
    setIsLoading(false)
    if (response.data.length === 0) {
      setIsLoading(false)
      return;
    }
    setEmployees(response.data)
  }

  useEffect(() => {
    getEmployeesByCompany()
  })

  return {
    employees,
    isLoading
  }
}

export default useEmployee
