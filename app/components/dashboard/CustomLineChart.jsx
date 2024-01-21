"use client"
import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);


function CustomLineChart({ name, color, data }) {

    return (
        <div >
            <Line
                options={{
                    plugins: {
                        legend: {
                            display: false,

                        },

                        title: {
                            display: true,
                            text: name,
                            color: "white",
                            fullSize: true,
                            font: { weight: 'bold' },

                        }
                    },
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },
                    scales: {

                        y: { // defining min and max so hiding the dataset does not change scale range
                            // display: false,
                            border:{
                                dash:[4,4]   
                            },
                            grid: {
                                offset:false,
                                display:true ,
                                color:"gray",

                            },
                            ticks:{
                                stepSize: 20,
                                display:false
                            }
                        },
                        x: { // defining min and max so hiding the dataset does not change scale range

                            // display: false,
                            grid: {
                                display: false
                            },
                            ticks:{
                                color:"white"
                            }
                        }
                    }
                }}
                datasetIdKey='id'
                data={{
                    labels: ['a', 'a', 'a', 'a', 'a', 'a', 'a'],
                    datasets: [
                        {
                            label: name,
                            data: data,
                            borderWidth: 4,
                            borderColor: color,
                            tension: 0.1
                        },
                    ],
                }}
            />
        </div>
    )
};


export default CustomLineChart