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
import { cookies } from "next/headers";
import { getPublicUrl } from "@/utils/storage";
import { strip } from "@/utils/helpder";
import Activities from "@/app/components/user/profile/Activities";

async function Profile() {
    let cookieStore = cookies();
    let token = cookieStore.get("Auth");
    let fetchOptions = {
        headers: {
            Authorization: token.value,
        },
    };
    let userDetails = await (
        await fetch(
            process.env.NEXT_PUBLIC_BACKEND + "user/userDetail",
            fetchOptions
        )
    ).json();
    let avatar = await getPublicUrl({
        from: "image",
        path: "avatar/" + userDetails.username,
    });
    let userPosts = await (
        await fetch(
            process.env.NEXT_PUBLIC_BACKEND +
                `post/all?page=0&limit=9999&authorId=${userDetails.userInformation.id}&sortBy=updated_at`
        )
    ).json();
    return (
        <div className="grid gap-[1rem] grid-cols-3">
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-inherit max-h-[100%] max-w-[60%]">
                    <Box>
                        <h3 className="font-bold text-lg text-center">
                            Edit user information
                        </h3>
                        <div className="py-4">
                            <Edit userDetail={userDetails} />
                        </div>
                    </Box>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <section className=" flex gap-[1rem] flex-col">
                <Box>
                    <ProfileCard
                        className="m-5"
                        avatar={avatar}
                        name={userDetails.userInformation.fullName}
                        roles={userDetails.roles}
                    />
                    <Overview postDetail={userPosts.content} classname=" m-5" />
                    <div className="flex flex-col w-full">
                        <div className="divider divider-start">Details</div>
                    </div>
                    <Detail
                        bio={userDetails.userInformation.bio}
                        contact={userDetails.userInformation.phone}
                        email={userDetails.email}
                        status={userDetails.status.name}
                        username={userDetails.username}
                    />
                    <Action />
                </Box>
                <Statistic detail={userPosts.content} />
            </section>
            <section className="flex gap-[1rem] flex-col col-span-2">
                <PasswordReset email={userDetails.email} />
                <Social
                    userId={userDetails.userInformation.id}
                    socials={userDetails.userInformation.socials}
                />
            </section>
            <section className="col-span-3">
                <Device />
                <Activities />
            </section>
        </div>
    );
}

export default Profile;
