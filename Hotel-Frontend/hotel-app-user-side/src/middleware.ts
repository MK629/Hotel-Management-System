import { NextRequest, NextResponse } from 'next/server';
import { getLoggedInUser } from './services/credentialsService';

export const middleware = async (request : NextRequest) => {

    let loggedInUser: String = await getLoggedInUser()

    if(!loggedInUser){
        return NextResponse.rewrite(new URL("/auth/login",request.url))
    }
    else{
        return NextResponse.next()
    }
}

export const config = {
    matcher: ['/home', '/reservation/:path*', '/about/:path*', '/profile/:path*']
}