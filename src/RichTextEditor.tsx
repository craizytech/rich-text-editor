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
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['image'],
        ['clean']
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Rich Text Editor</h2>

            <div className="mb-8">
                <div className="border rounded-lg overflow-hidden">
                    {/* Custom styles for ReactQuill */}
                    <style>
                        {`
                  .ql-container {
                    min-height: 200px;
                    font-size: 16px;
                    font-family: system-ui, -apple-system, sans-serif;
                  }
                  .ql-toolbar {
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                    background-color: #f8fafc;
                    border-color: #e2e8f0;
                  }
                  .ql-container {
                    border-bottom-left-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    border-color: #e2e8f0;
                  }
                  .ql-editor {
                    padding: 1rem;
                  }
                `}
                    </style>
                    <ReactQuill
                        value={text}
                        onChange={handleChange}
                        modules={modules}
                        className="bg-white"
                    />
                </div>
            </div>

            {text && (
                <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Preview</h3>
                    <div
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;
