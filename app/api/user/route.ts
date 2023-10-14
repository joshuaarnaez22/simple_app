import connectDB from "../../../lib/mongoose";
import User from "../../../lib/user";

import { NextRequest, NextResponse } from "next/server";

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
