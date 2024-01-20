import { makeACallTo } from "@/utils/network";
import React from "react";
import { cookies } from "next/headers";

async function UserLog({ params }) {
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

    let userActivities = await (
        await makeACallTo(`log/activity?userId=${params.id}`, "GET", {
            Authorization: token,
        })
    ).json();
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userActivities &&
                            userActivities.map((a) => {
                                return (
                                    <tr>
                                        <td>{a.createdAt}</td>
                                        <td>{a.action}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserLog;
