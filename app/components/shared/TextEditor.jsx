import React from 'react'
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ editorRef, initValue }) {
    return (
        <div className="z-0 ">
            <Editor
                initialValue={initValue ? initValue : null}
                onInit={(evt, editor) => (editorRef.current = editor)}
                id="editor"
                apiKey="sncffu26ys9pgaa4fp1ozl0g80ttdu6nv00yodyd8zgccgfv"
                init={{
                    skin: 'oxide-dark',
                    selector: "textarea",
                    plugins:
                        "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
                    toolbar:
                        "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
                }}
            />
        </div>
    );
}

export default TextEditor