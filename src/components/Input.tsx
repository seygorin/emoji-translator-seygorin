// components/Input.tsx
import { useState, useRef, useEffect, FormEvent } from 'react';

interface InputProps {
  onSend: (text: string) => void;
  loading: boolean;
}

const Input: React.FC<InputProps> = ({ onSend, loading }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSend(text);
    setText('');
  };

  return (
    <div className='max-w-md mx-auto my-4 '>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='p-2 border border-gray-200 rounded resize-none overflow-hidden max-h-[50vh]'
          placeholder='📝 🙏'
          rows={1}
        />
        <button
          disabled={loading}
          type='submit'
          className={`p-2 text-white rounded ${loading ? 'bg-blue-100' : 'bg-pink-300 hover:bg-pink-500'}`}
        >
          {loading ? '🔄 ⌛' : '📤 ➡️'}
        </button>
      </form>
    </div>
  );
};

export default Input;
