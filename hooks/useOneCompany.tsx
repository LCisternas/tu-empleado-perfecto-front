import { useRouter } from 'next/router';
import axios from 'axios';
import { useState, useEffect } from 'react'

interface CompanyProps {
  id: number;
  name: string;
  phone: string;
  rut: string;
  direction: string;
}

const useOneCompany = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyProps[]>([])
  
  const router = useRouter();
  const { name } = router.query;
  const baseURLCompany = 'https://tep-planetscale.herokuapp.com/api/company'
  
  const getCompanyInformation = async () => {
    const response = await axios.get(`${baseURLCompany}/?name=${name}`)
    setCompanyInfo(response.data)
  }

  useEffect(() => {
    getCompanyInformation()
  })

  return {
    companyInfo
  }
}

export default useOneCompany
