"use client";
import React, { useState } from "react";
import Drawer from "../components/dashboard/drawer/drawer";
import Topbar from "../components/dashboard/topbar";
import { useRouter } from "next/navigation";
import { CookiesProvider, useCookies } from "react-cookie";
import { useEffect } from "react";
import Login from "../authentication/page";
import { getPublicUrl } from "@/utils/storage";
import { strip } from "@/utils/helpder";
function DashboardLayout({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(["Authorization"]);
    let [user, setUser] = useState();
    const token = cookies.Authorization;
    const router = useRouter();
    let fetchUser = async () => {
        let fetchOptions = {
            headers: {
                Authorization: token,
            },
        };
        try {
           
            let data = (
                await fetch(
                    process.env.NEXT_PUBLIC_BACKEND + "user/userDetail",
                    fetchOptions
                )
            );
            if (data.status >= 400) {
                removeCookie("Authorization");
                router.push("/");
            }
            data = await data.json()
            data.avatar = await getPublicUrl({from:"image", path:`avatar/${data.email}/${strip(data.fullName)}`})
            setUser(data);
        } catch (error) {
            removeCookie("Authorization");
            router.push("/");
        }
    };
    useEffect(() => {
        if (!token) {
            router.push("/authentication");
        }
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
