import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Drawer from "../components/dashboard/drawer/drawer";
import Topbar from "../components/dashboard/topbar";
function DashboardLayout({ children }) {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    if (!token) {
        redirect("/authentication");
    }
    return (
        <div className="flex">
            <div  className="fixed z-10">
                <Drawer/>
            </div>
            <main className="my-3 ml-[8rem] mr-6 w-[100vw]">
                <Topbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;
