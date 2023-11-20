import Box from "@/app/components/shared/box";
import Action from "@/app/components/user/profile/Action";
import Detail from "@/app/components/user/profile/Detail";
import Device from "@/app/components/user/profile/Device";
import Edit from "@/app/components/user/profile/Edit";
import Overview from "@/app/components/user/profile/Overview";
import PasswordReset from "@/app/components/user/profile/PasswordReset";
import ProfileCard from "@/app/components/user/profile/ProfileCard";
import Social from "@/app/components/user/profile/Social";
import Statistic from "@/app/components/user/profile/statistic";
import React from "react";
const awaitTimeout = (delay) =>
    new Promise((resolve) => setTimeout(resolve, delay));

async function Profile() {
    // await awaitTimeout(3000);
    return (
        <div className="grid gap-[1rem] grid-cols-3">
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-inherit max-h-[100%] max-w-[60%]">
                    <Box>
                        <h3 className="font-bold text-lg text-center">
                            Edit user information
                        </h3>
                        <div className="py-4">
                            <Edit />
                        </div>
                    </Box>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <section className=" flex gap-[1rem] flex-col">
                <Box>
                    <ProfileCard className="m-5" />
                    <Overview classname=" m-5" />
                    <div className="flex flex-col w-full">
                        <div className="divider divider-start">Details</div>
                    </div>
                    <Detail />
                    <Action />
                </Box>
                <Statistic />
            </section>
            <section className="flex gap-[1rem] flex-col col-span-2">
                <PasswordReset />
                <Social />
                <Device />
            </section>
        </div>
    );
}

export default Profile;
