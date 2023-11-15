"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { CookiesProvider, useCookies } from "react-cookie";
export default function Home() {

    const [cookies, setCookie, removeCookie] = useCookies(['Authentication']);
    const token = cookies.Authentication;
    const router = useRouter()
    useEffect(()=>{
        if (token) {
            router.push("/dashboard");
        } else {
            router.push("/authentication")
        }

    })
}
