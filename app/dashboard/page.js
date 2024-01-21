import React from "react";
import Box from "../components/shared/box";
import Welcome from "../components/dashboard/welcome";
import CustomLineChart from "../components/dashboard/CustomLineChart";
import Activities from "../components/dashboard/activities";
import Device from "../components/user/profile/Device";
import PopularPost from "../components/dashboard/popularPost";
import CustomAreaChart from "../components/dashboard/CustomAreaChart";
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
function Dashboard() {
    let viewData = shuffle([65, 59, 80, 81, 56, 55, 40]);
    let shareData = shuffle([65, 59, 80, 81, 56, 55, 40]);
    let likeData = shuffle([65, 59, 80, 81, 56, 55, 40]);
    let pointData = shuffle([65, 59, 80, 81, 56, 55, 40]);
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-4">
                <Welcome name="phong" />
            </div>
            <Box className="col-span-2 ">
                <CustomLineChart name="VIEW" color="blue" data={viewData} />
            </Box>

            <Box className="col-span-4 row-span-1">
                <h4 className="text-white">Point</h4>
                <CustomAreaChart data={pointData} />
            </Box>
            <div className="col-span-2 gap-4 flex flex-col">
                <Box className="  ">
                    <CustomLineChart
                        name="SHARE"
                        color="pink"
                        data={shareData}
                    />
                </Box>
                <Box className=" ">
                    <CustomLineChart
                        name="LIKE"
                        color="yellow"
                        data={likeData}
                    />
                </Box>
            </div>
            <Box className="col-span-3">
                <h4 className="text-white text-lg mb-3">Most Liked Posts</h4>
                <PopularPost />
            </Box>
            <Box className="col-span-3">
                <h4 className="text-white text-lg mb-3">Most Viewed Posts</h4>
                <PopularPost />
            </Box>
            <Box className="h-[30rem] overflow-x-auto overflow-scroll col-span-3">
                <Activities />
            </Box>
            <div className="col-span-3">
                <Device />
            </div>
        </div>
    );
}

export default Dashboard;
