import { Column } from './carbon'

export interface PageTitleCardProps {
  title: string
}
export function PageTitleCard(props: PageTitleCardProps) {
  return (
    <Column span={'100%'} className='mb-10'>
      <h1 className='text-4xl'>{props.title}</h1>
    </Column>
  )
}
