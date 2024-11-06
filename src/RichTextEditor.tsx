import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
    // State to hold the text input
    const [text, setText] = useState<string>('');

    // Handle text change in the editor
    const handleChange = (value: string) => {
        setText(value);
    };

    const toolbarOptions = [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        ['image'],
        ['clean']
      ];
    
    const modules = {
        toolbar: toolbarOptions,
    };

    return (
        <div>
            <h2>Rich Text Editor</h2>
            <ReactQuill value={text} onChange={handleChange} modules={modules} />
            <p>Output: {text}</p>
        </div>
    );
};

export default RichTextEditor;
