'use client'

import { AreaChart } from '@carbon/charts-react'

export function Last7DaysSalesChart() {
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
            title: 'Total Sales',
            mapsTo: 'totalSales',
            scaleType: 'linear',
          },
        },
      }}
      data={[
        {
          date: new Date(2019, 0, 1),
          totalSales: 5000,
        },
        {
          date: new Date(2019, 0, 2),
          totalSales: 1000,
        },
        {
          date: new Date(2019, 0, 3),
          totalSales: 4010,
        },
        {
          date: new Date(2019, 0, 4),
          totalSales: 2040,
        },
        {
          date: new Date(2019, 0, 5),
          totalSales: 7000,
        },
        {
          date: new Date(2019, 0, 6),
          totalSales: 8002,
        },
        {
          date: new Date(2019, 0, 7),
          totalSales: 4053,
        },
      ].map((v) => ({
        group: 'Daily sales',
        ...v,
      }))}
    />
  )
}
