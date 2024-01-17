import './globals.css'
import '@carbon-extra/css'
import '@carbon/charts-react/styles.css'

import { IBM_Plex_Sans } from 'next/font/google'
import { ServerSideWrapper as ServerSideThemeWrapper } from 'nextjs-themes/server/nextjs'
import NextTopLoader from 'nextjs-toploader'
import { PropsWithChildren } from 'react'

import { Body } from './layout.element'

const inter = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

export default function RootLayout(props: PropsWithChildren) {
  return (
    <ServerSideThemeWrapper tag='html' lang='en'>
      <Body className={inter.className}>
        <NextTopLoader color='var(--cds-background-inverse)' zIndex={9000} />
        {props.children}
      </Body>
    </ServerSideThemeWrapper>
  )
}
