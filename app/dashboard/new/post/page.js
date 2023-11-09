'use client'
import React, { useState } from "react";
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";


const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

function Post() {
    const [editor,setEditor] = useState(() => withReact(createEditor()));
    return <Slate editor={editor} initialValue={initialValue} >
      {/* <Editable /> */}
    </Slate>;
}

export default Post;
