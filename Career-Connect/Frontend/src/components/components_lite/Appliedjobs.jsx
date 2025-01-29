import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

const Appliedjobs = () => {
  return (
    <div>
    <Table>
      <TableCaption>
        Recent Applied Jobs
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Title</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <TableRow key={index}>
              <TableCell>02/01/2006</TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>ABC Corporation</TableCell>
              <TableCell>
                <Badge>
                  Selected
                </Badge>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
  
  )
}

export default Appliedjobs