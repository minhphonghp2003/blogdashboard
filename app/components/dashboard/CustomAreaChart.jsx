"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


function CustomAreaChart({ data }) {
    let options = {
        chart: {
            dataLabels: {
                enabled: false
            },
        },

    }
    let series = [
        {
            name: "point",
            data: data
        }
    ]
    return (
        <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="100%"
        />

    )
}

export default CustomAreaChart