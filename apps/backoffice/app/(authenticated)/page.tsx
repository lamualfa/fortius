import {
  Launch,
  Product as ProductIcon,
  Purchase,
  UserCertification,
  UserSpeaker,
} from '@carbon/icons-react'
import { Fragment, Suspense } from 'react'

import {
  ClickableTile,
  Column,
  Content,
  Grid,
  SkeletonText,
  TagSkeleton,
  Tile,
} from '@/element/carbon'
import { PageTitleCard } from '@/element/page-title-card'
import { SectionTitleCard } from '@/element/section-title-card'
import { TotalReport } from '@/element/total-report'
import { RoleName } from '@/lib/const'
import {
  countProducts,
  getBestSellingProducts,
  getProduct,
  Product,
} from '@/lib/product'
import { countDailyTransactions, countTransactions } from '@/lib/transaction'
import { countUsers } from '@/lib/user'

import {
  DailyTransactionsChart,
  DailyTransactionsChartSkeleton,
} from './page.element'

export default async function Page() {
  return (
    <Content>
      <Grid>
        <PageTitleCard title='Summary' />

        <Column md={4}>
          <TotalReport Icon={UserCertification} title='Total Managers'>
            <Suspense fallback={<TagSkeleton />}>
              <TotalManagers />
            </Suspense>
          </TotalReport>
        </Column>
        <Column md={4}>
          <TotalReport Icon={UserSpeaker} title='Total Cashiers'>
            <Suspense fallback={<TagSkeleton />}>
              <TotalCashiers />
            </Suspense>
          </TotalReport>
        </Column>
        <Column md={4}>
          <TotalReport Icon={ProductIcon} title='Total Products'>
            <Suspense fallback={<TagSkeleton />}>
              <TotalProducts />
            </Suspense>
          </TotalReport>
        </Column>
        <Column md={4}>
          <TotalReport Icon={Purchase} title='Total Transactions'>
            <Suspense fallback={<TagSkeleton />}>
              <TotalTransactions />
            </Suspense>
          </TotalReport>
        </Column>

        <SectionTitleCard title='Best Selling Products' />
        <Suspense
          fallback={
            <Fragment>
              <Column md={4}>
                <ProductSaleSkeleton />
              </Column>
              <Column md={4}>
                <ProductSaleSkeleton />
              </Column>
              <Column md={4}>
                <ProductSaleSkeleton />
              </Column>
              <Column md={4}>
                <ProductSaleSkeleton />
              </Column>
            </Fragment>
          }
        >
          <BestSellingProducts />
        </Suspense>

        <SectionTitleCard title='Daily transactions in the last 90 days' />
        <Column span={'100%'}>
          <Tile>
            <Suspense fallback={<DailyTransactionsChartSkeleton />}>
              <DailyTransactions />
            </Suspense>
          </Tile>
        </Column>
      </Grid>
    </Content>
  )
}

async function TotalManagers() {
  const totalManagers = await countUsers({
    role: RoleName.Manager,
  })
  return <p className='text-2xl'>{totalManagers.toLocaleString('id')}</p>
}

async function TotalCashiers() {
  const totalManagers = await countUsers({
    role: RoleName.Cashier,
  })
  return <p className='text-2xl'>{totalManagers.toLocaleString('id')}</p>
}

async function TotalProducts() {
  const totalProducts = await countProducts()
  return <p className='text-2xl'>{totalProducts.toLocaleString('id')}</p>
}

async function TotalTransactions() {
  const totalTransactions = await countTransactions()
  return <p className='text-2xl'>{totalTransactions.toLocaleString('id')}</p>
}

async function BestSellingProducts() {
  const bestSellingProducts = await getBestSellingProducts()
  return bestSellingProducts.map((v) => (
    <Column key={v.product_id} md={4}>
      <Suspense>
        <ProductSale productId={v.product_id} quantity={v.quantity} />
      </Suspense>
    </Column>
  ))
}

interface ProductSaleProps {
  productId: Product['id']
  quantity: number
}
function ProductSale(props: ProductSaleProps) {
  return (
    <ClickableTile href={`/products/${props.productId}`}>
      <header className='flex justify-between'>
        <Suspense fallback={<TagSkeleton />}>
          <ProductSaleTitle productId={props.productId} />
        </Suspense>
        <Launch />
      </header>
      <p className='text-base mt-2'>
        {props.quantity.toLocaleString('id')} Sales
      </p>
    </ClickableTile>
  )
}

interface ProductSaleTitleProps {
  productId: Product['id']
}
async function ProductSaleTitle(props: ProductSaleTitleProps) {
  const product = await getProduct(props.productId)
  return <h3 className='text-base font-semibold'>{product.name}</h3>
}

function ProductSaleSkeleton() {
  return (
    <Tile>
      <TagSkeleton size='sm' />
      <SkeletonText className='mt-3' />
    </Tile>
  )
}

export async function DailyTransactions() {
  const data = await countDailyTransactions()
  return <DailyTransactionsChart data={data} />
}
