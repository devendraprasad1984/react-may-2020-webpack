import React, {useRef, useState} from 'react';

const ace = window.ace;

export const CodeEditor = (props) => {
    // const fileSel = useRef();
    const editorRef = useRef();
    const [contents, setContents] = useState('');
    let site=window.location.href.indexOf('localhost')!==-1?'http://localhost:8000':'https://dpresume.com';
    let api='/API/getCode.php?';

    // const fileSelector = document.getElementById('file-selector');
    // const fileSelector = fileSel.current;
    let initEditor = () => {
        const editor = ace.edit(editorRef.current.id);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/javascript");
    }
    let loadCode = () => {
        let {files} = props;
        if (!files||files==='') return;
        fetch(site+api+'files=' + files).then(res=>res.json()).then(data=>setCodeData(data));
        let setCodeData=(data)=>{
            let contentToDisplay = ''
            for (let d in data) {
                contentToDisplay += data[d];
            }
            const editor = ace.edit(editorRef.current.id);
            editor.setTheme("ace/theme/chrome");
            editor.session.setMode("ace/mode/jsx");
            editor.setValue(contentToDisplay);
            editor.setReadOnly(true);
            // setContents(contentToDisplay);
        }
    }
    let readFile = (event) => {
        initEditor();
        const file = event.target.files[0];
        if (!file) return;
        console.log(file);
        let reader = new FileReader();
        // console.log('file reader', reader);
        reader.onload = (e) => {
            var contents = e.target.result;
            // console.log('file loader content', contents);
            // document.getElementById('editor').innerText = contents;
            editorRef.current.innerText = contents;
        };
        reader.readAsText(file);
    }
    return (
        <div>
            {/*<div className="openFile ui btn blue">*/}
            {/*    <span>Load Code</span>*/}
            {/*    <input ref={fileSel} type="file" id="file-selector" className="open" onChange={readFile}/>*/}
            {/*</div>*/}
            <div>
                <span className='ui btn blue' onClick={() => loadCode()}>How I Coded this page</span>
            </div>
            <div ref={editorRef} id="editor" disabled>
                {/*{contents}*/}
                {/*<div dangerouslySetInnerHTML={{__html: contents}} />*/}
            </div>
        </div>
    )
}