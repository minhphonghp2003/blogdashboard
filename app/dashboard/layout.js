"use client";
import React from "react";
import Drawer from "../components/dashboard/drawer/drawer";
import Topbar from "../components/dashboard/topbar";
import { useRouter } from "next/navigation";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";
function DashboardLayout({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(["Authentication"]);
    const token = cookies.Authentication;
    const router = useRouter();
    useEffect(()=>{
        if (!token) {
            router.push("/authentication");
            return;
        }
        router.replace("/dashboard");
    })
    return (
        <div className="flex">
            <div className="fixed z-10">
                <Drawer />
            </div>
            <main className="my-3 ml-[8rem] mr-6 w-[100vw]">
                <Topbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
