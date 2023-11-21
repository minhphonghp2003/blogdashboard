import React from 'react'

function Paginate({ pageCount, setCurrent, current }) {
    let handlePrevClicked = (e) => {
        if (current <= 1) {
            return
        }
        setCurrent(current - 1);
    }
    let handlePageClicked = (e) => {
        setCurrent(e.target.textContent);
    }
    let handleNextClicked = (e) => {
        if (current >= pageCount) {
            return
        }
        setCurrent(current + 1)
    }

    let pages = []
    for (let index = 0; index < pageCount; index++) {
        pages.push(
            <li>
                <button onClick={handlePageClicked} className={`flex items-center justify-center px-4 h-10 leading-tight text-white  hover:bg-gray-100 hover:text-gray-700  ${current == index + 1 ? "bg-[#696cff]" : "bg-[#7c7db614] "} `}>{index + 1}</button>
            </li>
        )

    }

    return (
        <div className='flex justify-center mt-5'>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <button onClick={handlePrevClicked} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-[#7c7db614] rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    {pages}
                    <li>
                        <button onClick={handleNextClicked} className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-[#7c7db614] rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Paginate 