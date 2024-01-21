import React from 'react'

function Welcome({ name }) {
    return (
        <div className='flex justify-between'>
            <div className=''>
                <p className='text-white text-[1.625rem]'>
                    Welcome back, {name} 👋👋
                </p>
                <p>
                    Your progress this week is Awesome. let's keep it up and get a lot of points !
                </p>
            </div>
            <div  className='justify-self-end'>
                <img className='' src="welcome.png" alt="welcome" />
            </div>

        </div>
    )
}

export default Welcome