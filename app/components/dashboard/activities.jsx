import React from 'react'
let bgColor = ["blue", "red", "pink", "brown", "orange", "green"]
function Activities() {
    return (
        <div className="w-full  mx-auto relative ">
            <h4 className='text-white text-lg '>Recent activities</h4>

            <div className="border-l-2 mt-5">
                <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-4 py-2 bg-[${bgColor[0]}] text-white rounded flex-row space-y-0`}>
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-lg font-bold">Orientation and Briefing on Uniliver basics</h1>
                    </div>
                </div>
            </div>
            <div className="border-l-2 mt-5">
                <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-4 py-2 bg-[${bgColor[0]}] text-white rounded flex-row space-y-0`}>
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-lg font-bold">Orientation and Briefing on Uniliver basics</h1>
                    </div>
                </div>
            </div>
            <div className="border-l-2 mt-5">
                <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-4 py-2 bg-[${bgColor[0]}] text-white rounded flex-row space-y-0`}>
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-lg font-bold">Orientation and Briefing on Uniliver basics</h1>
                    </div>
                </div>
            </div>
            <div className="border-l-2 mt-5">
                <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-4 py-2 bg-[${bgColor[0]}] text-white rounded flex-row space-y-0`}>
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-lg font-bold">Orientation and Briefing on Uniliver basics</h1>
                    </div>
                </div>
            </div>
            <div className="border-l-2 mt-5">
                <div className={`transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-4 py-2 bg-[${bgColor[0]}] text-white rounded flex-row space-y-0`}>
                    <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    <div className="flex-auto">
                        <h1 className="text-lg">Day 1</h1>
                        <h1 className="text-lg font-bold">Orientation and Briefing on Uniliver basics</h1>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Activities