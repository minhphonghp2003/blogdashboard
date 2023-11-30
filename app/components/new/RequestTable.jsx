"use client"
import React, { useEffect, useState } from 'react'
import { useCookies } from "react-cookie";
import Box from '../shared/box'
import { makeACallTo } from '@/utils/network'

let removeRequestById = (oldRequest, id) => {
    let newRequest = oldRequest.filter(function (obj) {
        return obj.id !== id;
    });
    return newRequest
}

function RequestTable({ className }) {
    const [cookies] = useCookies(["Authorization"]);
    const [request, setRequest] = useState()
    const token = cookies.Authorization;
    let handleAccept = async (id,type) => {

        let res = await makeACallTo(type+"/", "PUT", { "Authorization": token }, id)
        if (res.status == 200) {
            setRequest(removeRequestById(request, id))
        }
    }
    let handleRemove = async(id,type) => {
        let res = await makeACallTo(type+"/", "DELETE", { "Authorization": token }, id)
        if (res.status == 200) {
            setRequest(removeRequestById(request, id))
        }
    }
    let fetchPending = async () => {
        let tagRes = await makeACallTo("tag/pending", "GET", { "Authorization": token })
        let topicRes = await makeACallTo("topic/pending", "GET", { "Authorization": token })
        let pendingTopic = await topicRes.json()
        let pendingTag = await tagRes.json()
        pendingTopic.map(r => r.type = "topic")
        pendingTag.map(r => r.type = "tag")
        let data = [
            ...pendingTag,
            ...pendingTopic
        ]
        setRequest(data)
    }
    useEffect(() => {
        fetchPending()
    }, [])


    // TODO: Tag
    return (
        <div className={className}>
            <Box>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                request && request.map(r => {
                                    return <tr >
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="font-bold">{r.type}</div>
                                            </div>
                                        </td>
                                        <td>
                                            {r.name}
                                        </td>
                                        <th className='text-end '>
                                            <button onClick={() => { handleAccept(r.id,r.type) }} className="btn btn-ghost btn-xs">Accept</button>
                                            <button onClick={() => { handleRemove(r.id,r.type) }} className="btn btn-ghost btn-xs bg-red-600 text-white">Remove</button>
                                        </th>
                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </Box>
        </div>
    )
}

export default RequestTable