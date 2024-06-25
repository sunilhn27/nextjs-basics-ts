import React, { use } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsers } from "@/serveractions/getUserList";

async function ListUsers() {
  const userList = await getUsers();

  return (
    <div className="flex justify-center items-center my-12">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>FirstName</TableHead>
            <TableHead>LastName</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userList?.map((users) => (
            <>
              <TableRow key={users.id}>
                <TableCell>{users.id}</TableCell>
                <TableCell className="font-medium">{users.firstName}</TableCell>
                <TableCell>{users.lastName}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListUsers;
