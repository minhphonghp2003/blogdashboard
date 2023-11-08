"use client";
import ForgotCard from "@/app/components/authentication/forgot";
import React from "react";
import { useSearchParams } from "next/navigation";
import ResetCard from "@/app/components/authentication/reset";

function Forgot() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return <div>{!id ? <ForgotCard /> : <ResetCard />}</div>;
}

export default Forgot;
