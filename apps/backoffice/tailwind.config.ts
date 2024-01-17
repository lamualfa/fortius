import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './element/**/*.{ts,tsx}'],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
export default config
