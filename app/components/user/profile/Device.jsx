import React from 'react'
import Box from '../../shared/box'
import { FaWindows } from "react-icons/fa";
function Device() {
    let devices = [
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
        { icon: <FaWindows color='#87CEEB' />, browser: "Chrome", os: "Windows", device: "HP Spectre", location: "switzerland", time: "10, July 2021 20:07" },
    ]
    return (
        <Box>
            <div className='flex flex-col gap-5 '>
                <h4 className='text-white text-lg'>Recent Devices</h4>
                <div className="overflow-x-auto h-[20rem]">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>BROWSER</th>
                                <th>DEVICE</th>
                                <th>LOCATION</th>
                                <th>RECENT ACTIVITIES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                devices.map(d => {
                                    return <tr>

                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    {d.icon}
                                                </div>
                                                <div className="font-bold">{d.browser}</div>
                                                <div className="text-sm opacity-50">on {d.os}</div>
                                            </div>
                                        </td>
                                        <td>
                                            {d.device}
                                        </td>
                                        <td>{d.location}</td>
                                        <th>
                                            {d.time}
                                        </th>
                                    </tr>

                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </Box>
    )
}

export default Device