"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { CookiesProvider, useCookies } from "react-cookie";

export default function Home() {

    const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
    const token = cookies.Authorization;
    const router = useRouter()
    useEffect(()=>{
        if (token) {
            router.replace("/dashboard");
        } else {
            router.replace("/authentication")
        }

    },[])
}
