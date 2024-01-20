import { makeACallTo } from "@/utils/network";
import React from "react";
import { cookies } from "next/headers";
import Link from "next/link";

async function AllUser() {
    const cookieStore = cookies();
    const token = cookieStore.get("Auth").value;

    let res = await (
        await makeACallTo("user/checkAdmin", "GET", {
            Authorization: token,
        })
    ).json();
    if (res == false) {
        return <div>Not available</div>;
    }
    let allUser = await (
        await makeACallTo("user/alluser", "GET", {
            Authorization: token,
        })
    ).json();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser &&
                            allUser.map((u) => {
                                return (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div>
                                                    <div className="font-bold">
                                                        {u.name}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {u.roles &&
                                                            u.roles.map((r) => {
                                                                return (
                                                                    r.name + " "
                                                                );
                                                            })}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {u.credential &&
                                                u.credential.username}
                                        </td>
                                        <td>
                                            {u.credential && u.credential.email}
                                        </td>
                                        <td>{u.phone}</td>
                                        <td>{u.status && u.status.name}</td>
                                        <th>
                                            <Link
                                                href={`/dashboard/user/all/${u.id}`}
                                                className="btn btn-ghost btn-xs"
                                            >
                                                Log details
                                            </Link>
                                        </th>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllUser;
