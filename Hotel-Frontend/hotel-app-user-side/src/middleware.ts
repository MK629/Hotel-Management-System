import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (request : NextRequest) => {

    let loggedInUser: String = request.cookies.get("user")?.value

    if(!loggedInUser){
        return NextResponse.rewrite(new URL("/auth/login",request.url))
    }
    else{
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/home', '/reservation/:path*']
}