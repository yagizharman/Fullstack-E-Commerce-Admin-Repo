import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }



        const storeByUserId = await prismadb.store.findFirst({
            where: {
                id: params.storeId,
                userId
            }
        });
        if (!storeByUserId) {
            return new NextResponse('Unauthorized', { status: 403 });
        }

        const order = await prismadb.order.findMany({
            where: {
                storeId: params.storeId
            }
        })

        order.map(async (order) => {
            const orderItem = await prismadb.orderItem.deleteMany({
                where: {
                    orderId: order.id
                }
            })
        })


        const orderDelete = await prismadb.order.deleteMany({
            where: {
                storeId: params.storeId
            }
        })


        return NextResponse.json(orderDelete);


    }
    catch (error) {
        console.log('[COLOR_DELETE] ', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}