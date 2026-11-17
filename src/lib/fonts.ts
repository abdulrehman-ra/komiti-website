import localFont from 'next/font/local'

export const ppMori = localFont({
  src: [
    { path: '../assets/fonts/PPMori-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/PPMori-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mori-face',
  display: 'swap',
  adjustFontFallback: 'Arial',
})

export const geist = localFont({
  src: '../assets/fonts/geist-latin-variable.woff2',
  variable: '--font-geist-face',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  adjustFontFallback: 'Arial',
})
