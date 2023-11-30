export let makeACallTo = async (api, method, headers,body) => {
    let fetchOption = {
        method: method,
        headers :{
            ...headers,
            "Content-Type": "application/json",
        },
        body

    }
    return  await fetch(process.env.NEXT_PUBLIC_BACKEND+api,fetchOption)
    
}