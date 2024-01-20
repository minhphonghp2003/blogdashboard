import { makeACallTo } from '@/utils/network'
import { cookies } from 'next/headers';
import React from 'react'
import Box from '../../shared/box';

async function Activities() {
    const cookieStore = cookies();
    const token = cookieStore.get("Auth").value;
    let activities = await (await makeACallTo("log/activity", "GET", { Authorization: token })).json()
    return (
        <Box className="mt-12">
            <div className='flex flex-col gap-5 '>
                <h4 className='text-white text-lg'>Recent Activities</h4>
                <div className="overflow-x-auto h-[20rem]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>DATE</th>
                                <th>ACTON</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities &&
                                activities.map((a) => {
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
        </Box>
    )
}

export default Activities