import { NextResponse } from "next/server";
import { getDonorContributions } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const supporters = await getDonorContributions();
    return NextResponse.json({ supporters });
  } catch (error) {
    console.error("Failed to fetch supporters", error);
    return NextResponse.json({ error: "Failed to load supporters" }, { status: 500 });
  }
}
