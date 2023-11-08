import Image from "next/image";
import Dashboard from "./dashboard/page";
import { cookies } from "next/headers";
import Login from "./authentication/page";
export default function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
    return <>{token ? <Dashboard /> : <Login />}</>;
}
