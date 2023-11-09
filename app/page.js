import Image from "next/image";
import Dashboard from "./dashboard/page";
import { cookies } from "next/headers";
import Login from "./authentication/page";
import { redirect } from "next/navigation";
export default function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    if (token) {
        redirect("/dashboard");
    } else {
        redirect("/authentication");
    }
}
