"use client";
import SideNav from "@/app/components/user/works/SideNav";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import React, { useState } from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Update from "./update/page";
import Statistics from "./statistic/page";
import Comment from "./comment/page";

function Detail({ params }) {
    let [component, setComponent] = useState(<Update params={params}/>);
    let sideNavContent = [
        { icon: <WorkRoundedIcon />, name: "Detail", to:<Update params={params}/> },
        {
            icon: <BarChartOutlinedIcon />,
            name: "Statistics",
            to: <Statistics params={params}/>,
        },
        {
            icon: <CommentRoundedIcon />,
            name: "Comment",
            to: <Comment params={params}/>,
        },
    ];
    return (
        <div className="grid grid-cols-4">
            <SideNav setComponent={setComponent} sideNavContent={sideNavContent} />
            <div className="col-span-3">
            {component}
            </div>
        </div>
    );
}

export default Detail;
