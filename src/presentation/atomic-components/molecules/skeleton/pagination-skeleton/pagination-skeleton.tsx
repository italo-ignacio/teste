import { FC } from 'react'
import { Skeleton } from '@mui/material'

import { PaginationSkeletonContainer } from './pagination-skeleton-styles'

const PaginationSkeleton: FC = () => (
  <PaginationSkeletonContainer>
    {Array.from(Array(6), (_, id) => (
      <Skeleton animation="wave" key={id} variant="circular" />
    ))}
  </PaginationSkeletonContainer>
)

export default PaginationSkeleton
