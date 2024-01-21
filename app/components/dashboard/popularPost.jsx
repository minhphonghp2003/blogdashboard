import React from 'react'

function PostCard({ image, title, topic, stat }) {
    return <div className='flex gap-4'>
        <div className='flex gap-4 '>
            <img className='rounded-full w-[50px] h-[50px] self-center' src={image} />
            <div className='flex flex-col'>
                <p className='max-w-[70%] text-white'>{title}</p>
                <p>{topic}</p>
            </div>
        </div>
        <div className='self-center'>
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{stat}</span>
        </div>
    </div>
}

function PopularPost() {
    let posts = [{
        image: "https://gphluonoiqxjiwxyhsox.supabase.co/storage/v1/object/public/image/gaming/machinegames-may-have-hinted-at-a-new-quake-game-during-the-developer-direct_1705716615092",
        title: "MachineGames may have hinted at a new Quake game during the Developer Direct",
        topic: "topic1",
        stat: 12
    },
    {
        image: "https://gphluonoiqxjiwxyhsox.supabase.co/storage/v1/object/public/image/gaming/machinegames-may-have-hinted-at-a-new-quake-game-during-the-developer-direct_1705716615092",
        title: "MachineGames may have hinted at a new Quake game during the Developer Direct",
        topic: "topic1",
        stat: 12
    },
    {
        image: "https://gphluonoiqxjiwxyhsox.supabase.co/storage/v1/object/public/image/gaming/machinegames-may-have-hinted-at-a-new-quake-game-during-the-developer-direct_1705716615092",
        title: "MachineGames may have hinted at a new Quake game during the Developer Direct",
        topic: "topic1",
        stat: 12
    },
    {
        image: "https://gphluonoiqxjiwxyhsox.supabase.co/storage/v1/object/public/image/gaming/machinegames-may-have-hinted-at-a-new-quake-game-during-the-developer-direct_1705716615092",
        title: "MachineGames may have hinted at a new Quake game during the Developer Direct",
        topic: "topic1",
        stat: 12
    }

    ]
    return (
        <div>
            {posts && posts.map(p => {
                return <PostCard image={p.image} title={p.title} topic={p.topic} stat={p.stat} />
            })}
        </div>
    )
}

export default PopularPost