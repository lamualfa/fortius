'use client'

import { AreaChart } from '@carbon/charts-react'

import { type countDailyTransactions } from '@/lib/transaction'

export interface DailyTransactionsChartProps {
  data: Awaited<ReturnType<typeof countDailyTransactions>>
}
export function DailyTransactionsChart(props: DailyTransactionsChartProps) {
  return (
    // @ts-ignore
    <AreaChart
      options={{
        height: '400px',
        width: '100%',
        axes: {
          bottom: {
            title: 'Date',
            mapsTo: 'date',
            scaleType: 'time',
          },
          left: {
            title: 'Total Transactions',
            mapsTo: 'total',
            scaleType: 'linear',
          },
        },
      }}
      data={props.data.map((v) => ({
        group: 'Daily Transactions',
        ...v,
      }))}
    />
  )
}

export function DailyTransactionsChartSkeleton() {
  return (
    // @ts-ignore
    <AreaChart
      options={{
        height: '400px',
        width: '100%',
        axes: {
          bottom: {
            title: 'Date',
            mapsTo: 'date',
            scaleType: 'time',
          },
          left: {
            title: 'Total Transactions',
            mapsTo: 'total',
            scaleType: 'linear',
          },
        },
        data: {
          loading: true,
        },
      }}
      data={[]}
    />
  )
}
