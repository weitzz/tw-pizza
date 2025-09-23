import { stripe } from "@/lib/stripe";
import { getLoggedUserFromHeader } from "@/services/authService";
import { createNewOrder } from "@/services/orderService";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {


    return NextResponse.json({ test: true })
}