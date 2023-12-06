export let makeACallTo = async (api, method, headers, body) => {
    let fetchOption = {
        method: method,
        headers: {
            ...headers,
            "Content-Type": "application/json",
        },
        body,
    };
    return await fetch(process.env.NEXT_PUBLIC_BACKEND + api, fetchOption);
};
export let addValue = (list) => {
    if (list) {
        list.map((l) => {
            l.value = l.name;
        });
    }
};
export let fetchPostData = async ({
    tags,
    rlists,
    topics,
    setRLists,
    setTags,
    setTopics,
}) => {
    let tagRes = await makeACallTo("tag/all", "GET");
    tags = await tagRes.json();
    let rListRes = await makeACallTo("readingList/all", "GET");
    rlists = await rListRes.json();
    let topicRes = await makeACallTo("topic/all", "GET");
    topics = await topicRes.json();
    addValue(tags);
    addValue(rlists);
    addValue(topics);
    setRLists(rlists);
    setTags(tags);
    setTopics(topics);
};
