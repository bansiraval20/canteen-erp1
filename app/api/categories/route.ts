import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoDB'
import { Category } from '@/models/Category'

export async function POST(req: Request) {  
  try {
    await connectDB()

    const body = await req.json()

    const category = await Category.create({
      name: body.name,
    })

    return NextResponse.json(
      {
        success: true,
        data: category,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create category',
      },
      { status: 500 }
    )
  }
}