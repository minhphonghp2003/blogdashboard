"use client"
import React, { useEffect, useMemo } from 'react'
import { Editor } from "novel";
import { generateJSON } from '@tiptap/html'
import StarterKit from "@tiptap/starter-kit";
import Youtube from '@tiptap/extension-youtube'



function NovelEditor({ onChange, defaultValue }) {
    let handleUpdate = (e) => {
        onChange(e.getHTML())
    }
    const output = useMemo(() => {
        return generateJSON(defaultValue, [
            StarterKit
        ])
    }, [defaultValue])
    return (
        <div>
            <Editor disableLocalStorage  extensions={[Youtube]} defaultValue={output} onUpdate={handleUpdate} className='m-auto bg-white  text-black' />
        </div>
    )
}

export default NovelEditor