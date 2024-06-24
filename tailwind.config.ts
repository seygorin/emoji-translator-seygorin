import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'rainbow-gradient':
          'linear-gradient(to bottom, rgba(255, 0, 0, 0.3), rgba(255, 165, 0, 0.3), rgba(255, 255, 0, 0.3), rgba(0, 128, 0, 0.3), rgba(0, 0, 255, 0.3), rgba(75, 0, 130, 0.3), rgba(238, 130, 238, 0.3))',
      }),
    },
  },
  plugins: [],
}

export default config
