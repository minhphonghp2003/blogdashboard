// "use client";
import { cookies } from "next/headers";
import { useRouter, redirect } from "next/navigation";
// import React, { useState } from "react";
import Drawer from "../components/dashboard/drawer/drawer";
import Topbar from "../components/dashboard/topbar";
// import { CookiesProvider, useCookies } from "react-cookie";
// import { useEffect } from "react";
import Login from "../authentication/page";
import { getPublicUrl } from "@/utils/storage";
import { checkTokenAvail, strip } from "@/utils/helpder";
async function DashboardLayout({ children }) {
    const cookieStore = cookies();
    const token = cookieStore.get("Authorization");
    if (!token) {
        redirect("/authentication");
    }

    let user;
    let fetchOptions = {
        headers: {
            Authorization: token.value,
        },
    };
    try {
        let data = await fetch(
            process.env.NEXT_PUBLIC_BACKEND + "user/userDetail",
            fetchOptions
        );

        if (data.status >= 400) {
            redirect("/authentication");
        }
        data = await data.json();
        data.avatar = await getPublicUrl({
            from: "image",
            path: `avatar/${data.username}`,
        });
        user = data;
        // setUser(data);
    } catch (error) {
        // cookies().delete("Authorization");
        // removeCookie("Authorization");
        redirect("/authentication");
        // removeCookie("Authorization");
        // router.push("/");
    }
    // };
    // useEffect(() => {
    //     if (!token) {
    //         router.push("/authentication");
    //     }
    //     fetchUser();
    // }, []);
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
