import connectDB from "../../../lib/mongoose";
import User from "../../../lib/user";

import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  await connectDB();
  try {
    const users = await User.find({});

    return NextResponse.json({
      users,
      usersLength: users.length,
    });
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  await connectDB();
  try {
    const user = await User.find({
      $and: [{ username: body.username }, { email: body.email }],
    });

    return NextResponse.json({
      user: user[0],
    });
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: "INTERNAL_SERVER_ERROR",
    });
  }
}
