import SideNav from "@/app/components/user/works/SideNav";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import React from "react";

function Detail({ params }) {
    let sideNavContent = [
        { icon: <BarChartOutlinedIcon />, name: "Detail", to: "to" },
        { icon: "Icon", name: "name2", to: "to" },
        { icon: "Icon", name: "name3", to: "to" },
    ];
    return (
        <div className="grid grid-cols-4">
            <SideNav sideNavContent={sideNavContent} />
            Content
        </div>
    );
}

export default Detail;
