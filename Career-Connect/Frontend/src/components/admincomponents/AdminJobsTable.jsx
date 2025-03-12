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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal, Briefcase, Loader2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const AdminJobsTable = () => {
  const { allAdminJobs, searchJobByText, loading } = useSelector((store) => store.jobs);
  const navigate = useNavigate();
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);

  useEffect(() => {
    const filteredJobs = allAdminJobs.filter((job) => {
      if (!searchJobByText) return true;
      const searchTerm = searchJobByText.toLowerCase();
      return (
        job.title?.toLowerCase().includes(searchTerm) ||
        job?.company?.name.toLowerCase().includes(searchTerm)
      );
    });
    setFilterJobs(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM dd, yyyy");
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4 p-4 bg-white rounded-lg">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
      <Table className="divide-y divide-gray-100">
        <TableCaption className="py-3 bg-gray-50">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Briefcase className="w-4 h-4" />
            <span>{filterJobs?.length} jobs found</span>
          </div>
        </TableCaption>
        
        <TableHeader className="bg-gray-50">
          <TableRow className="hover:bg-gray-50">
            <TableHead className="text-gray-600">Company</TableHead>
            <TableHead className="text-gray-600">Role</TableHead>
            <TableHead className="text-gray-600">Posted Date</TableHead>
            <TableHead className="text-right text-gray-600">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="divide-y divide-gray-100">
          {filterJobs?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-64 text-center">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                  <p className="text-gray-500">No jobs found</p>
                  <Button onClick={() => navigate("/admin/jobs/new")}>
                    Post New Job
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            filterJobs?.map((job) => (
              <TableRow
                key={job._id}
                className="transition-colors hover:bg-gray-50"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={job.company?.logo} />
                      <AvatarFallback className="bg-gray-100 text-sm">
                        {job.company?.name?.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-800">
                      {job.company?.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium text-gray-800">
                  {job.title}
                </TableCell>
                <TableCell className="text-gray-600">
                  {formatDate(job.createdAt)}
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
                    <PopoverContent className="w-48 p-2">
                      <div className="space-y-1">
                        <button
                          onClick={() => navigate(`/admin/jobs/${job._id}/edit`)}
                          className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                        >
                          <Edit2 className="w-4 h-4 mr-2" />
                          Edit Job
                        </button>
                        <button
                          onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                          className="flex items-center w-full px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Applicants
                        </button>
                      </div>
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

export default AdminJobsTable;