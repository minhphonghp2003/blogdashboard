"use client";
import React, { useState, useEffect } from "react";
import LoginForm from "../components/authentication/login";
import { useRouter } from "next/navigation";


function Login() {
    let router = useRouter();
 
    let [isError, setError] = useState(false);
    let handleLogin = async ({ username, password }) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        };
        let result = await fetch(
            process.env.NEXT_PUBLIC_BACKEND + "user/login",
            requestOptions
        );
        result = await result.json();

        if (!result.token) {
            setError(true);
            return;
        }
        document.cookie="Auth="+result.token
        setError(false);
        router.push("/dashboard");
    };
    return (
        <main className="grid grid-cols-3">
            <section className="flex justify-center col-span-2 p-20">
                <img src="login-page.png" />
            </section>
            <section className="bg-[#2b2c40] p-[3rem] flex flex-col justify-center items-start">
                <div className="grow-[1] w-[60%]">
                    <img src="logo.svg" />
                </div>
                <div className="">
                    <h4 className="text-[white] mb-2 ">
                        Welcome to PhongBlog! 👋
                    </h4>
                    <p className="mb-4 text-[#a3a4cc]">
                        Please sign-in to your account and start analyzing
                    </p>
                </div>
                <div className=" w-full">
                    <LoginForm isError={isError} onLogin={handleLogin} />
                </div>
                <div className="divider">or</div>
                <div className="grow-[7] self-center">
                    <p>Want to be an author? Contact admin</p>
                </div>
            </section>
        </main>
    );
}

export default Login;
