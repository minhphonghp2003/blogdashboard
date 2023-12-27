import React, { memo, useEffect, useRef } from 'react'
import EditorJS, { OutputData } from "@editorjs/editorjs";
import DragDrop from 'editorjs-drag-drop';
import { EDITOR_TOOLS } from './editortool'


function Editorjs({ data, onChange, holder, upload }) {
    const ref = useRef();

    useEffect(() => {
        //initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                onReady: () => {
                    new DragDrop(editor);
                },
                placeholder: 'Let`s write an awesome story!',
                inlineToolbar: true,
                holder: holder,
                tools: EDITOR_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            })
            ref.current = editor;
        }
        else {
            if (upload) {
                ref.current = new EditorJS({
                    onReady: () => {
                        new DragDrop(ref.current);
                    },

                    inlineToolbar: true,
                    holder: holder,
                    tools: EDITOR_TOOLS,
                    data: upload,
                    async onChange(api, event) {
                        const data = await api.saver.save();
                        onChange(data);
                    },
                })
            }
        }

        //add a return function handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, [upload]);

    return (

        <div id={holder} className="prose max-w-full bg-white text-black" />

    )
}

export default Editorjs