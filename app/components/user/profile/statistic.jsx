import React from 'react'



function Statistic() {
    return (
        <div className=" shadow-[0_0.125rem_0.5rem_0_rgba(0,0,0,.16)] bg-[#2b2c40] stats stats-horizontal ">

            <div className="stat">
                <div className="stat-title">Likes</div>
                <div className="stat-value">31K</div>
            </div>

            <div className="stat">
                <div className="stat-title">Shares</div>
                <div className="stat-value">4,200</div>
            </div>

            <div className="stat">
                <div className="stat-title">Views</div>
                <div className="stat-value">1,200</div>
            </div>

        </div>
    )
}

export default Statistic