import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { email } = await req.json()

      // Connect to MongoDB
      const client = await MongoClient.connect(process.env.MONGODB_URI as string)
      const db = client.db("rc_mega")
      const collection = db.collection("subscribers")

      // Check if email already exists
      const existingUser = await collection.findOne({ email })
      if (existingUser) {
        client.close()
        return NextResponse.json({ message: "Email already registered" }, { status: 400 })
      }

      // Insert new email
      await collection.insertOne({ email, signupDate: new Date() })
      client.close()

      // Send welcome email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Welcome to RC Mega Community!",
        text: "Welcome to RC Mega community where throttling hobbies awaits for you! Stay tuned for updates...",
        html: "<h1>Welcome to RC Mega Community!</h1><p>Where throttling hobbies awaits for you! Stay tuned for updates...</p>",
      })

      return NextResponse.json({ message: "Signup successful" }, { status: 200 })
    } catch (error) {
      console.error("Signup error:", error)
      return NextResponse.json({ message: "An error occurred" }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 })
  }
}

