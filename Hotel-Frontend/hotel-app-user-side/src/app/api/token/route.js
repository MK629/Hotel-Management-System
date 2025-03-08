import { getToken } from "@/services/credentialsService";
import { NextResponse } from "next/server";

export async function GET() {
    const token = await getToken()
    return NextResponse.json({token})
}