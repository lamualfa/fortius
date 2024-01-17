import { Column } from './carbon'

export interface SectionTitleCardProps {
  title: string
}
export function SectionTitleCard(props: SectionTitleCardProps) {
  return (
    <Column span={'100%'} className='mt-14 mb-4'>
      <h1 className='text-2xl'>{props.title}</h1>
    </Column>
  )
}
