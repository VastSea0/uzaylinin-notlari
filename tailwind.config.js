module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.200'),
              a: {
                color: theme('colors.purple.300'),
                '&:hover': {
                  color: theme('colors.purple.100'),
                },
              },
              h1: {
                color: theme('colors.purple.300'),
              },
              h2: {
                color: theme('colors.purple.300'),
              },
              h3: {
                color: theme('colors.purple.300'),
              },
              strong: {
                color: theme('colors.purple.300'),
              },
              code: {
                color: theme('colors.purple.300'),
              },
              blockquote: {
                color: theme('colors.gray.200'),
                borderLeftColor: theme('colors.purple.500'),
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }