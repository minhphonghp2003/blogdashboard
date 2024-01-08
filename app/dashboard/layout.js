"use client";
// import { cookies } from "next/headers";
import { useRouter, redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import Drawer from "../components/dashboard/drawer/drawer";
import Topbar from "../components/dashboard/topbar";
import { CookiesProvider, useCookies } from "react-cookie";
import { getPublicUrl } from "@/utils/storage";
function DashboardLayout({ children }) {
    const router = useRouter();

    const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);
    const token = cookies.Authorization;
    if (!token) {
        router.push("/authentication");
    }

    let [user, setUser] = useState();

    let fetchUser = async () => {
        let fetchOptions = {
            headers: {
                Authorization: token,
            },
        };
        try {
            let data = await fetch(
                process.env.NEXT_PUBLIC_BACKEND + "user/userDetail",
                fetchOptions
            );
            if (data.status >= 400) {
                router.push("/authentication");
            }
            data = await data.json();
            data.avatar = await getPublicUrl({
                from: "image",
                path: `avatar/${data.username}`,
            });
            user = data;
            setUser(data);
        } catch (error) {
            document.cookie =
                "Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            router.push("/authentication");
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="flex">
            <div className="fixed z-10">
                <Drawer />
            </div>
            <main className="my-3 ml-[8rem] mr-6 w-[100vw]">
                <Topbar user={user} />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
