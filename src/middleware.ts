import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const response = NextResponse.next({
        headers:{
            "Content-Security-Policy":'*'
        }
    })
    return response;
}