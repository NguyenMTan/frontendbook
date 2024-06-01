import DialogDelete from "@/components/DialogDelete";
import IsError from "@/components/IsError";
import IsLoading from "@/components/IsLoading";
import ManagerHeader from "@/components/ManagerHeader";
import PaginationList from "@/components/PaginationList";
import SearchList from "@/components/SearchList";
import TableHeadSort from "@/components/TableHeadSort";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteOrder, listOrders } from "@/services/ordersService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Orders: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [sort, setSort] = useState<string>("asc");
  const [inputKeyword, setInputKeyword] = useState<string>();
  const [keyword, setKeyword] = useState<string>();
  const queryClient = useQueryClient();

  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders", pageNumber, sort, keyword],
    queryFn: () => listOrders(pageNumber, sort, keyword),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    refetchOnReconnect: true,
  });
  const totalPages = orders?.data.total_pages;

  // MUTATION DELETE
  const mutationDelete = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["orders"] });
      toast.success("Xoá order thành công!");
    },
    onError: () => {
      toast.error("Error");
    },
  });

  if (isLoading) return <IsLoading />;
  if (isError) return <IsError />;
  return (
    <div className="p-2 m-4">
      <ManagerHeader
        title="Manager Orders"
        description="Đây là trang quản lý các đơn hàng"
      />
      <div className="flex items-center justify-between mt-4">
        <SearchList
          inputKeyword={inputKeyword}
          setInputKeyword={setInputKeyword}
          setKeyword={setKeyword}
        />
      </div>
      <div>
        <Table>
          <TableCaption>Đây là danh sách các khách hàng</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHeadSort sort={sort} setSort={setSort} />
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.data.orders.map((o: any) => (
              <TableRow key={o.id}>
                <TableCell>{o.id}</TableCell>
                <TableCell>{o.name}</TableCell>
                <TableCell>{o.total}</TableCell>
                <TableCell>{o.oder_time}</TableCell>
                <TableCell className="flex gap-2">
                  <DialogDelete
                    entityId={o.id}
                    entity="user"
                    mutationDelete={mutationDelete}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PaginationList
          setState={setPageNumber}
          pageNumber={pageNumber}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Orders;
