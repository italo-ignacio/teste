import { FC } from 'react'
import { Skeleton } from '@mui/material'

import SkeletonRow from './skeleton-table-row-styles'

const SkeletonTableRow: FC<{ quantity?: number }> = ({ quantity = 1 }) => (
  <SkeletonRow key={quantity}>
    {Array.from(Array(quantity), (_, id) => (
      <Skeleton animation="wave" key={id} height={30} sx={{ flex: 1, margin: '0px 20px', maxWidth: '110px' }} />
    ))}
  </SkeletonRow>
)

SkeletonTableRow.defaultProps = {
  quantity: 5,
}

export default SkeletonTableRow
