import React from 'react'
import Box from '../../shared/box'
import { FaWindows } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";
import { RiMacbookFill } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import { FcAndroidOs } from "react-icons/fc";
import { cookies } from 'next/headers'

import { makeACallTo } from '@/utils/network';
async function Device() {
    const cookieStore = cookies()
    const token = cookieStore.get('Auth')

    let devices = await (await makeACallTo("log/", "GET", { "Authorization": token.value })).json()
    devices.map(d => {
        d["time"] = d["createdAt"]
        let os = d["os"].toLowerCase()
        if (os.match("ios")) {
            d["icon"] = <IoIosAppstore  color='blue'/>
        } else if (os.match("windows")) {

            d["icon"] = <FaWindows color='#87CEEB' />
        } else if (os.match("mac")) {
            d["icon"] = <RiMacbookFill />
        } else if (os.match("nux")) {
            d["icon"] = <FcLinux />
        } else if (os.match("andr")) {
            d["icon"] = <FcAndroidOs />
        }

    })
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