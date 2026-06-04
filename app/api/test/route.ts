import { connectDB } from '@/lib/mongoDB'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await connectDB()

    return NextResponse.json({
      success: true,
      message: 'MongoDB Connected Successfully',
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Connection Failed',
      error,
    })
  }
}