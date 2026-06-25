import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongoDB'
import { Table } from '@/models/Table'

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const body = await req.json()
    const { id } = await params

    const table = await Table.findByIdAndUpdate(
      id,
      {
        tableNumber: body.tableNumber,
        isOccupied: body.isOccupied,
        isActive: body.isActive,
      },
      { new: true }
    )

    return NextResponse.json({
      success: true,
      data: table,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update table',
      },
      { status: 500 }
    )
  }
}


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()

    const { id } = await params

    await Table.findByIdAndDelete(id)

    return NextResponse.json({
      success: true,
      message: 'Table deleted successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete table',
      },
      { status: 500 }
    )
  }
}