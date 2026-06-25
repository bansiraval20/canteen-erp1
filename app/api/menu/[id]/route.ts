import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoDB'
import { MenuItem } from '@/models/MenuItem'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const body = await req.json()
    const { id } = await params

    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      { 
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
        stock: body.stock,
        isAvailable: body.isAvailable,  
      },
      { new: true }
    )

    if (!menuItem) {
      return NextResponse.json(
        {
          success: false,
          message: 'Menu item not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: menuItem,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update menu item',
      },
      { status: 500 }
    )
  }
}

// Delete operation

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const { id } = await params

    await MenuItem.findByIdAndDelete(id)

    return NextResponse.json({
      success: true,
      message: 'MenuItem deleted',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete category',
      },
      { status: 500 }
    )
  }
}