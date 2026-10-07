import React, { useMemo } from 'react';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import standard Quill styles
import clsx from 'clsx';

// CSS to override Quill's defaults to match Tailwind inputs
// You can put this in your global.css or a styled-component
const CUSTOM_QUILL_STYLES = `
  .quill-wrapper .ql-toolbar {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-color: #e5e7eb; /* tailwind gray-200 */
    background-color: #f9fafb; /* tailwind gray-50 */
  }
  .quill-wrapper .ql-container {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-color: #e5e7eb;
    font-size: 1rem; /* base text size */
  }
  .quill-wrapper.error .ql-toolbar,
  .quill-wrapper.error .ql-container {
    border-color: #ef4444; /* tailwind red-500 */
  }
`;

interface RichTextEditorProps extends Omit<ReactQuillProps, 'onChange'> {
  label?: string;
  value: string;
  onChange: (content: string) => void;
  error?: string;
  simple?: boolean; // If true, shows fewer toolbar options
  helperText?: string;
  height?: string; // specific height control
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  label,
  value,
  onChange,
  error,
  simple = false,
  helperText,
  height = 'h-64', // default height
  className,
  ...props
}) => {
  
  // Define toolbars to prevent re-rendering issues
  const modules = useMemo(() => ({
    toolbar: simple
      ? [
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean'],
        ]
      : [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          ['link', 'image'], // You might want to remove 'image' if you don't handle base64
          ['clean'],
        ],
  }), [simple]);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {/* Inject Custom Styles for Border Radius */}
      <style>{CUSTOM_QUILL_STYLES}</style>

      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className={clsx("quill-wrapper flex flex-col", error && "error")}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          className={`${height} mb-12 sm:mb-10`} // Margin bottom ensures toolbar doesn't overlap content
          {...props}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
      
      {/* Helper Text (only shows if no error) */}
      {!error && helperText && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default RichTextEditor;