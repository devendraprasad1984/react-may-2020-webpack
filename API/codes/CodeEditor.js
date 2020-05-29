import React,{useRef} from 'react';

const ace = window.ace;

export const CodeEditor = (props) => {
    const fileSel=useRef();
    const editorRef=useRef();

    // const fileSelector = document.getElementById('file-selector');
    // const fileSelector = fileSel.current;
    const initEditor=()=>{
        const editor = ace.edit(editorRef.current.id);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
    }
    const readFile=(event)=>{
        initEditor();
        const file = event.target.files[0];
        if (!file) return;
        console.log(file);
        let reader = new FileReader();
        // console.log('file reader', reader);
        reader.onload = (e)=> {
            var contents = e.target.result;
            // console.log('file loader content', contents);
            // document.getElementById('editor').innerText = contents;
            editorRef.current.innerText=contents;
        };
        reader.readAsText(file);
    }
    return (
        <div>
            <div className="openFile ui btn blue">
                <span>Load Code</span>
                <input ref={fileSel} type="file" id="file-selector" className="open" onChange={readFile}/>
            </div>
            <div ref={editorRef} id="editor" disabled></div>
        </div>
    )
}