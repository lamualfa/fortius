'use client'

import cs from 'clsx'
import { useTheme } from 'nextjs-themes'
import NextTopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'

export interface BodyProps extends PropsWithChildren {
  className?: string
}
export function Body(props: BodyProps) {
  const { theme } = useTheme()
  return (
    <body className={cs(theme === 'dark' ? 'cds--g90' : 'cds--white')}>
      {props.children}
    </body>
  )
}

export function TopLoader() {
  const { theme } = useTheme()
  return <NextTopLoader color={theme} zIndex={9000} />
}
