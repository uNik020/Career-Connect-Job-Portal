import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Building2, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const CompaniesTable = () => {
  const { companies, searchCompanyByText, loading } = useSelector(
    (store) => store.company
  );
  const navigate = useNavigate();
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  useEffect(() => {
    const filtered =
      companies?.filter((company) => {
        if (!searchCompanyByText) return true;
        return company.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
      }) || [];
    setFilteredCompanies(filtered);
  }, [companies, searchCompanyByText]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
      <Table className="divide-y divide-gray-100">
        <TableCaption className="py-3 bg-gray-50">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>{filteredCompanies?.length} companies registered</span>
          </div>
        </TableCaption>
        
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-50">
            <TableHead className="w-[60px] text-gray-600">Logo</TableHead>
            <TableHead className="text-gray-600">Company Name</TableHead>
            <TableHead className="text-gray-600">Registration Date</TableHead>
            <TableHead className="text-right text-gray-600">Actions</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody className="divide-y divide-gray-100">
          {filteredCompanies?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-64 text-center">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <Building2 className="w-12 h-12 text-gray-400" />
                  <p className="text-gray-500">No companies found</p>
                  <Button onClick={() => navigate('/admin/companies/new')}>
                    Add Company
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filteredCompanies?.map((company) => (
              <TableRow
                key={company._id}
                className="transition-colors hover:bg-gray-50"
              >
                <TableCell>
                  <Avatar className="w-10 h-10 border">
                    <AvatarImage
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gray-100 text-sm font-medium">
                      {company.name?.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                
                <TableCell className="font-medium text-gray-800">
                  {company.name}
                </TableCell>
                
                <TableCell className="text-gray-600">
                  {formatDate(company.createdAt)}
                </TableCell>
                
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-gray-100"
                      >
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2">
                      <button
                        onClick={() => navigate(`/admin/companies/${company._id}`)}
                        className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
                      >
                        <Edit2 className="w-4 h-4 mr-2 text-gray-600" />
                        Edit
                      </button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;