import { Pagination } from '@mui/material'
import { styled } from 'stitches.config'

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const PaginationUI = styled(Pagination, {
  '& svg': {
    color: '$blueLight',
  },
})
