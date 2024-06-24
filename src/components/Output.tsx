import { useRef } from 'react';

interface OutputProps {
  data: string;
}

const Output: React.FC<OutputProps> = ({ data }) => {
  const outputRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (outputRef.current) {
      navigator.clipboard.writeText(data)
        .then(() => {
        })
        .catch((err) => {
          console.error('Could not copy text: ', err);
        });
    }
  };

  return (
    <div className='bg-transparent max-w-md mx-auto my-4 p-4 border border-gray-200 rounded relative bg-gray-100 shadow-md'>
      <div className='pr-16 whitespace-pre-wrap break-words min-h-6'>
        <div ref={outputRef}>
          {data}
        </div>
      </div>
      <button
        onClick={handleCopy}
        className='absolute top-2 right-2 p-2 bg-transparent text-gray-700 rounded hover:bg-blue-100'
      >
        📋
      </button>
    </div>
  );
};

export default Output;
