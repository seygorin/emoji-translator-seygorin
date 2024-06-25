import {useRef, useState} from 'react'

interface OutputProps {
  data: string
}

const Output: React.FC<OutputProps> = ({data}) => {
  const outputRef = useRef<HTMLDivElement>(null)
  const [buttonText, setButtonText] = useState('📋')

  const handleCopy = () => {
    if (outputRef.current) {
      navigator.clipboard
        .writeText(data)
        .then(() => {
          setButtonText('👌')
          setTimeout(() => setButtonText('📋'), 1000)
        })
        .catch((err) => {
          console.error('Could not copy text: ', err)
        })
    }
  }

  return (
    <div className='bg-transparent max-w-md mx-auto my-4 p-4 border border-red-200 rounded relative shadow-sm max-h-[40vh] overflow-y-auto'>
      <div className='pr-11 whitespace-pre-wrap break-words min-h-6'>
        <div ref={outputRef}>{data}</div>
      </div>
      <button
        onClick={handleCopy}
        className='absolute top-2 right-2 p-2 bg-transparent rounded hover:bg-blue-100'
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Output
