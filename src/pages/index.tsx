'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Input from '../components/Input'
import Output from '../components/Output'
import Loading from '../components/Loading'

export default function Home() {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty(
        '--foreground-rgb',
        '255, 255, 255'
      )
      document.documentElement.style.setProperty(
        '--background-start-rgb',
        '0, 0, 0'
      )
      document.documentElement.style.setProperty(
        '--background-end-rgb',
        '0, 0, 0'
      )
    } else {
      document.documentElement.style.setProperty('--foreground-rgb', '0, 0, 0')
      document.documentElement.style.setProperty(
        '--background-start-rgb',
        '214, 219, 220'
      )
      document.documentElement.style.setProperty(
        '--background-end-rgb',
        '255, 255, 255'
      )
    }
  }, [isDarkMode])

  const fetchData = async (text: string) => {
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt: text}),
      })

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const result = await res.json()
      setData(result.response)
    } catch (error) {
      console.error('Fetch error:', error)
      setData('Error when fetching data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <main className='relative flex min-h-screen items-center justify-center bg-rainbow-gradient'>
      <div className='container mx-auto p-4 h-full flex flex-col justify-between'>
        <div className='flex-grow'>
          <h1 className='text-2xl font-bold text-center mb-4'>
            🌐 📲 🔤{' '}
            <Link
              href='https://github.com/seygorin'
              target='_blank'
              rel='noopener noreferrer'
              style={{
                background: 'none',
                WebkitTextFillColor: 'initial',
              }}
            >
              ✍️
            </Link>{' '}
            ♊{' '}
            <span
              style={{
                background:
                  'linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              -1.5 -
            </span>{' '}
            ⚡
          </h1>

          <Input onSend={fetchData} loading={loading} />
          <div className='min-h-[100px]'>
            {loading ? <Loading /> : <Output data={data} />}
          </div>
        </div>
        <div className='absolute top-4 right-4'>
          <button onClick={toggleTheme} className='p-2 bg-transparent'>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </main>
  )
}
