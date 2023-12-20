import React from 'react'
const editorJsHtml = require("editorjs-html");
const EditorJsToHtml = editorJsHtml();


function Preview({data}) {
  const html = EditorJsToHtml.parse(data)
  return (
    //✔️ It's important to add key={data.time} here to re-render based on the latest data.
    <div className="prose max-w-full" key={data.time}>
      {html.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
          );
        }
        return item;
      })}
    </div>
  );
}

export default Preview