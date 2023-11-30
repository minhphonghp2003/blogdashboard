import ReadingList from "@/app/components/new/ReadingList";
import RequestTable from "@/app/components/new/RequestTable";
import Tag from "@/app/components/new/Tag";
import Topic from "@/app/components/new/Topic";
import { makeACallTo } from "@/utils/network";
import React from "react";
import { cookies } from "next/headers";

async function Information() {
    let isAdmin = false;
    let cookieStore = cookies();
    const token = cookieStore.get("Authorization");
    let res = await makeACallTo("user/checkAdmin", "GET", {
        Authorization: token.value,
    });
    isAdmin = await res.json();
    return (
        <div className="grid grid-cols-3 gap-6">
            <ReadingList className="col-span-2 row-span-2 " />
            <Topic />
            {isAdmin && <RequestTable className="col-span-2" />}
            <Tag />
        </div>
    );
}

export default Information;
