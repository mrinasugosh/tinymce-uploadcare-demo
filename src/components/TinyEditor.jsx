import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor({ value, onChange }) {
  const editorRef = useRef(null);

  const handleEditorChange = (content) => {
    if (onChange) {
      onChange({
        target: {
          name: 'description',
          value: content
        }
      });
    }
  };

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      onInit={(_evt, editor) => editorRef.current = editor}
      init={{
        plugins: [ "uploadcare", "code", "link", "preview", "lists" ],
        uploadcare_public_key: import.meta.env.VITE_UPLOADCARE_PUBLIC_KEY,
        a11y_advanced_options: true,	
        toolbar: "undo redo | styles | bold italic underline | forecolor | bullist numlist| link uploadcare | code preview",
        height: 550,	
        menubar: false,
        toolbar_location: 'bottom',
        content_style: `
          body { max-width: 920px; margin: 1.5rem auto; padding: 0 2vw; }
          h1 { font-size: 1.5em; }
              h2 { font-size: 1.17em; }
          h1, h2, h3, h4, h5, h6 { font-weight: 500; margin: 0 0 0.75rem; }
          p + h1, p + h2, p + h3, p + h4, p + h5, p + h6 { margin-top: 2rem; }
          p { line-height: 1.6; margin: 0; } 
          p + p { margin-top: 1rem; }
          a { color: #2b70e3; }
          blockquote { color: #4e5c73; font-weight: 200; font-size: 1.3rem; margin: 1rem 2rem; padding: 0 0 0 1rem; border-left: 2px solid #2b70e3 !important; }
          figcaption {font-size: 0.875em;}
        `
      }}
      value={value || ''}
      onEditorChange={handleEditorChange}
    />
  );
}
