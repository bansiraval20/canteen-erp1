import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoDB'
import { Category } from '@/models/Category'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const body = await req.json()
    const { id } = await params

    const category = await Category.findByIdAndUpdate(
      id,
      { name: body.name },
      { new: true }
    )

    return NextResponse.json({
      success: true,
      data: category,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update category',
      },
      { status: 500 }
    )
  }
}