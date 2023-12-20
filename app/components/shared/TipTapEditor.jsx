"use client"
import React from 'react'
import { BubbleMenu,FloatingMenu, useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


function TipTapEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit
        ],

        content: '<p>Hello World! 🌎️</p>',
    })

    return (
        <div>
            {editor && <BubbleMenu className='flex gap-2 ' editor={editor} tippyOptions={{ duration: 100 }}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    strike
                </button>
            </BubbleMenu>}
            <EditorContent editor={editor} />

        </div>
    )

}

export default TipTapEditor