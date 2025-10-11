import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        api: process.env.API || "API is undefined 🚨",
    });
}