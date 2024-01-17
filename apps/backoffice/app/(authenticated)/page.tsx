import {
  Launch,
  Product,
  Purchase,
  UserCertification,
  UserFavorite,
} from '@carbon/icons-react'

import { ClickableTile, Column, Content, Grid, Tile } from '@/element/carbon'
import { PageTitleCard } from '@/element/page-title-card'
import { SectionTitleCard } from '@/element/section-title-card'
import { TotalReport } from '@/element/total-report'

import { Last7DaysSalesChart } from './page.element'

export default function Page() {
  return (
    <Content>
      <Grid>
        <PageTitleCard title='Summary' />

        <Column md={4}>
          <TotalReport
            Icon={UserCertification}
            title='Total Managers'
            value={5929}
          />
        </Column>
        <Column md={4}>
          <TotalReport
            Icon={UserFavorite}
            title='Total Customers'
            value={3000}
          />
        </Column>
        <Column md={4}>
          <TotalReport Icon={Product} title='Total Products' value={9020} />
        </Column>
        <Column md={4}>
          <TotalReport Icon={Purchase} title='Total Transactions' value={408} />
        </Column>

        <SectionTitleCard title='Best Selling Products' />
        <Column md={4}>
          <BestSellingProductReport title='Toothbrush' totalSales={10230} />
        </Column>
        <Column md={4}>
          <BestSellingProductReport title='Soap' totalSales={7002} />
        </Column>
        <Column md={4}>
          <BestSellingProductReport title='Book' totalSales={5003} />
        </Column>
        <Column md={4}>
          <BestSellingProductReport title='Water' totalSales={1038} />
        </Column>

        <SectionTitleCard title='Sales performance in the last 7 days' />
        <Column span={'100%'}>
          <Tile>
            <Last7DaysSalesChart />
          </Tile>
        </Column>
      </Grid>
    </Content>
  )
}

interface BestSellingProductReportProps {
  title: string
  totalSales: number
}
function BestSellingProductReport(props: BestSellingProductReportProps) {
  return (
    <ClickableTile>
      <header className='flex justify-between'>
        <h3 className='text-base font-semibold'>{props.title}</h3>
        <Launch />
      </header>
      <p className='text-base mt-2'>
        {props.totalSales.toLocaleString('id')} Sales
      </p>
    </ClickableTile>
  )
}
