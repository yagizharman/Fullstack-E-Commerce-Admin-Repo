"use client";

import { Plus, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import router from "next/navigation";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { OrderColumn, columns } from "./columns";
import { ApiList } from "@/components/ui/api-list";
import axios from "axios";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Orders (${data.length})`}
          description="Manage orders for your store"
        />
        <Button
          onClick={() => {
            axios.delete(`/api/${params.storeId}/deleteOrders`).then(() => {
              router.push(`/${params.storeId}/orders`);
            });
          }}
        >
          <Trash className="mr-2 h-4 w-4" />
          Delete all orders
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
