import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:      '#F5F4F0',
        slate:      '#3D4451',
        'slate-dk': '#2C313C',
        terra:      '#C4956A',
        'terra-dk': '#A87A52',
        'terra-lt': '#EDD9C4',
        dark:       '#2A2A2A',
        muted:      '#6B6F7A',
        border:     '#D6D4CE',
      },
     fontFamily: {
  title: ['Indie Flower', 'cursive'],
  body:  ['Stack Sans Text', 'system-ui', 'sans-serif'],
},
      fontSize: {
        base: ['17px', { lineHeight: '1.65' }],
        lg:   ['19px', { lineHeight: '1.6'  }],
        xl:   ['21px', { lineHeight: '1.5'  }],
        '2xl':['24px', { lineHeight: '1.4'  }],
        '3xl':['30px', { lineHeight: '1.3'  }],
        '4xl':['36px', { lineHeight: '1.2'  }],
        '5xl':['48px', { lineHeight: '1.1'  }],
        '6xl':['60px', { lineHeight: '1.05' }],
        '7xl':['72px', { lineHeight: '1'    }],
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sm:   '0',
        md:   '0',
        lg:   '0',
        xl:   '0',
        '2xl':'0',
        '3xl':'0',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
