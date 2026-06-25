import { connectDB } from '@/lib/mongoDB'
import { Table } from '@/models/Table'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()
    const table = await Table.create({
      tableNumber: body.tableNumber,
    })

    return NextResponse.json(
      {
        success: true,
        data: table,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create table',
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    await connectDB();

    const tables = await Table.find().sort({ tableNumber: 1 })

    return NextResponse.json({
      success: true,
      data: tables,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch tables',
      },
      { status: 500 }
    )
  }
}