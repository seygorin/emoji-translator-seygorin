import {useState, useRef, useEffect, FormEvent} from 'react'

interface InputProps {
  onSend: (text: string) => void
  loading: boolean
}

const Input: React.FC<InputProps> = ({onSend, loading}) => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [text])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSend(text)
  }

  const handleClear = () => {
    setText('')
  }

  return (
    <div className='max-w-md mx-auto relative'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='relative '>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='text-zinc-400 p-4 border border-gray-200 rounded resize-none overflow-hidden max-h-[50vh] focus:outline-none shadow w-full'
            placeholder='📝 🙏'
            rows={1}
          />
          {text && (
            <button
              type='button'
              onClick={handleClear}
              className='absolute top-2 right-2 flex items-center justify-center  p-2 bg-transparent rounded hover:bg-blue-100'
            >
              ❌
            </button>
          )}
        </div>
        <button
          disabled={loading}
          type='submit'
          className={`p-2 text-white rounded shadow ${
            loading ? 'bg-blue-100' : 'bg-pink-300 hover:bg-pink-500'
          }`}
        >
          {loading ? '🔄 ⌛' : '📤 ➡️'}
        </button>
      </form>
    </div>
  )
}

export default Input
