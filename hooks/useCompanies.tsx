import { useState, useEffect } from 'react'
import axios from 'axios';

interface CompanyProps {
  id: number;
  name: string;
  phone: string;
  rut: string;
  direction: string;
}

const useCompanies = () => {  
  const [companies, setCompanies] = useState<CompanyProps[]>([]);
  const baseURLCompany = 'https://tep-planetscale.herokuapp.com/api/company'
  
  const getCompanies = async () => {
    const response = await axios.get(`${baseURLCompany}/`)
    setCompanies(response.data)
  }

  useEffect(() => {
    getCompanies()
  }, [])

  return {
    companies
  }
}

export default useCompanies
