import prismadb from "@/lib/prismadb";

export const getTotalSales = async (storeId: string) => {
    const paidOrders = await prismadb.order.findMany({
        where: {
            storeId,
            isPaid: true,
        },

    });


    return paidOrders.length;
};
