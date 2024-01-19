import clsx from 'clsx'

import { Column } from './carbon'

export interface SectionTitleCardProps {
  title: string
  isFirstSection?: boolean
}
export function SectionTitleCard(props: SectionTitleCardProps) {
  const isFirstSection = props.isFirstSection ?? false
  return (
    <Column
      span={'100%'}
      className={clsx('mb-4', isFirstSection ? null : 'mt-14')}
    >
      <h1 className='text-2xl'>{props.title}</h1>
    </Column>
  )
}
