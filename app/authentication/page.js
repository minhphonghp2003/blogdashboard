import React from "react";
import LoginForm from "../components/authentication/login";
function Login() {
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
                    <h4 class="text-[white] mb-2 ">Welcome to Sneat! 👋</h4>
                    <p class="mb-4 text-[#a3a4cc]">
                        Please sign-in to your account and start analyzing
                    </p>
                </div>
                <div className=" w-full">
                    <LoginForm />
                </div>
                <div class="divider">or</div>
                <div className="grow-[7] self-center">
                    <p >Want to be an author? Contact admin</p>
                </div>
            </section>
        </main>
    );
}

export default Login;
