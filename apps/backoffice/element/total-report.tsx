import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon'

import { Tile } from './carbon'

export interface TotalReportProps {
  title: string
  value: number
  Icon?: CarbonIconType
}
export function TotalReport(props: TotalReportProps) {
  const { Icon } = props
  return (
    <Tile>
      <header className='flex gap-x-2 items-center'>
        {Icon ? <Icon size={20} /> : null}
        <h2 className='text-lg'>{props.title}</h2>
      </header>
      <p className='text-xl mt-2'>{props.value.toLocaleString('id')}</p>
    </Tile>
  )
}
