import React from 'react'
import Navbar from '../components_lite/Navbar'
import CompaniesTable from './CompaniesTable'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'

const Companies = () => {
const navigate =useNavigate();
useGetAllCompanies();

  return (
    <div>
        <Navbar/>
        <div className="max-w-6xl mx-auto my-10">
            <div className="flex items-center justify-between my-5">
                <Input className="w-fit" placeholder="Filter by name"></Input>
                <Button onClick={()=>navigate("/admin/companies/create")}>Add Company</Button> 
            </div>
            <div>
                <CompaniesTable />
            </div>
        </div>
    </div>
  )
}

export default Companies