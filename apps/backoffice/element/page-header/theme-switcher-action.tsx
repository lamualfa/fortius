import { Asleep, Light } from '@carbon/icons-react'
import { HeaderGlobalAction } from '@carbon/react'
import { useTheme } from 'nextjs-themes'
import { useCallback } from 'react'

export default function ThemeSwitcherAction() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const onClick = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark')
  }, [isDark, setTheme])

  return (
    <HeaderGlobalAction aria-label='Theme switcher' onClick={onClick}>
      {isDark ? <Light size={20} /> : <Asleep size={20} />}
    </HeaderGlobalAction>
  )
}
