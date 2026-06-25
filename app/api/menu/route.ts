import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoDB'
import { MenuItem } from '@/models/MenuItem'

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const menuItem = await MenuItem.create({
      name: body.name,
      description: body.description,
      price: body.price,
      image: body.image,
      categoryId: body.categoryId,
      stock: body.stock,
      isAvailable: body.isAvailable,
    })

    return NextResponse.json(
      {
        success: true,
        data: menuItem,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('MENU CREATE ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create menu item',
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    await connectDB()

    const menuItems = await MenuItem.find()
      .populate('categoryId')

    return NextResponse.json({
      success: true,
      data: menuItems,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch menu items',
      },
      { status: 500 }
    )
  }
}