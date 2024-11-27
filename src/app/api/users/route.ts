import { getAllUsers, insertUser, getUserByLogin } from "@/app/_lib/model";
import { NextRequest, NextResponse } from "next/server";

export const GET = () => {
  const result = getAllUsers()
  return NextResponse.json({ result })
}

export const POST = async (req: NextRequest) => {
  const { name, surname, login, password } = await req.json()

  if (!name || !surname || !login || !password) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 })
  }
  if (password.length < 6) {
    return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
  }

  const existingUser = getUserByLogin(login)
  if (existingUser) {
    return NextResponse.json({ message: "Login already in use" }, { status: 409 })
  }

  const result = insertUser({ name, surname, login, password })
  if (result.changes === 1) {
    return NextResponse.json({ message: "User created successfully", id: result.lastInsertRowid }, { status: 201 })
  }

  return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
}

// import { getAllUsers, insertUser } from "@/app/_lib/model"
// import { NextRequest } from "next/server"

// export const GET = () => {
//     const result = getAllUsers()
//     return Response.json({result})
// }

// export const POST = async(req:NextRequest) => {
//     const user = await req.json()
//     const result = insertUser(user)
//     return Response.json({
//         ...user,
//         id:result.lastInsertRowid
//     })
// }