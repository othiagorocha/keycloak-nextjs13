import axios from "axios";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { authConfig } from "../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log(token);

  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = res.data;

  return NextResponse.json(posts, { status: 200 });
}
