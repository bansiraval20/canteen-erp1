import mongoose from 'mongoose'

export async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing')
    }

    await mongoose.connect(process.env.MONGODB_URI)

    console.log('MongoDB Connected')
  } catch (error) {
    console.error('MongoDB Error:', error)
    throw error
  }
}