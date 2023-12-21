import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export let getPublicUrl = async ({ from, path }) => {
    let data = supabase.storage.from(from).getPublicUrl(path);
    let publicUrl = data.data.publicUrl;
    return publicUrl;
};

export let upload = async ({ from, path, body, upsert }) => {
    let { data, error } = await supabase.storage.from(from).upload(path, body, {
        upsert: upsert,
    });
    return getPublicUrl({ from, path });
};

export let download = async ({ from, path }) => {
    let { data, error } = await supabase.storage.from(from).download(path);
    return await data.text();
};

export let saveJSON = async ({ data, fileName }) => {
    const file = new Blob([JSON.stringify(data, null, 2)], {
        type: "text/plain;charset=utf-8",
    });
    saveAs(file, fileName);
};
