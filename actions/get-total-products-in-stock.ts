import prismadb from "@/lib/prismadb";

export const getTotalProductsInStock = async (storeId: string) => {
    const productsInStock = await prismadb.product.count({
        where: {
            storeId,
            isArchived: false,

        },

    });


    return productsInStock;
};
