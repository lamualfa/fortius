import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon'
import { ReactNode } from 'react'

import { Tile } from './carbon'

export interface TotalReportProps {
  title: string
  Icon?: CarbonIconType
  children: ReactNode
}
export function TotalReport(props: TotalReportProps) {
  const { Icon } = props
  return (
    <Tile>
      <header className='flex gap-x-2 items-center mb-2'>
        {Icon ? <Icon size={20} /> : null}
        <h2 className='text-lg'>{props.title}</h2>
      </header>
      {props.children}
    </Tile>
  )
}
