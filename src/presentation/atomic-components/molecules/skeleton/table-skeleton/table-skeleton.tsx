import { FC } from 'react'
import { Skeleton } from '@mui/material'

import PaginationSkeleton from '../pagination-skeleton/pagination-skeleton'

import SkeletonTableRow from './skeleton-table-row/skeleton-table-row'
import TableSkeletonHead from './table-skeleton-styles'

const TableSkeleton: FC = () => {
  const quantity = (): number => 6
  return (
    <>
      <TableSkeletonHead>
        {Array.from(Array(quantity()), (_, id) => (
          <Skeleton animation="wave" key={id} height={30} sx={{ flex: 1, margin: '0px 20px', maxWidth: '110px' }} />
        ))}
      </TableSkeletonHead>

      <SkeletonTableRow quantity={quantity()} key={1} />
      <SkeletonTableRow quantity={quantity()} key={2} />
      <SkeletonTableRow quantity={quantity()} key={3} />
      <SkeletonTableRow quantity={quantity()} key={4} />
      <SkeletonTableRow quantity={quantity()} key={5} />
      <PaginationSkeleton />
    </>
  )
}

export default TableSkeleton
