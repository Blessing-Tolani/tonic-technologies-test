import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#0A2640',
        grey: '#777777',
        green: '#65E4A3',
      },
      fontFamily: {
        manrope: ['Manrope', 'ui-sans-serif', 'system-ui'],
        'open-sans': ['Opensans', 'ui-sans-serif', 'system-ui'],
        'work-sans': ['Worksans', 'ui-sans-serif', 'system-ui'],
      },
      screens: {
        xlMax: { max: '1279px' },
        lgMax: { max: '1023px' },
        mdMax: { max: '767px' },
        smMax: { max: '639px' },
      },
    },
  },
  plugins: [],
}
export default config
