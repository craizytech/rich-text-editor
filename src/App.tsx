import React from 'react';
import RichTextEditor from './RichTextEditor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
