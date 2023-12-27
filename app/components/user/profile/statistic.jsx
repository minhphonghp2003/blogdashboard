import React from 'react'


function Statistic({ detail }) {
    let like = 0
    let share = 0
    let view = 0
    if (detail) {
        detail.map(d => {
            like += d.likeReader.length
            share += d.postStatistic.shareCount
            view += d.postStatistic.viewCount
        })
    }
    return (
        <div className=" shadow-[0_0.125rem_0.5rem_0_rgba(0,0,0,.16)] bg-[#2b2c40] stats stats-horizontal ">

            <div className="stat">
                <div className="stat-title">Likes</div>
                <div className="stat-value">{like}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Shares</div>
                <div className="stat-value">{share}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Views</div>
                <div className="stat-value">{view}</div>
            </div>

        </div>
    )
}

export default Statistic