import { FC } from 'react'
import { HandleChangePage } from 'domain/handle-change-page'

import { Content, PaginationUI } from './pagination-styles'

type PaginationProps = {
  page: number
  totalPages?: number
  handleChangePage: HandleChangePage
}

const Pagination: FC<PaginationProps> = ({ page, totalPages, handleChangePage }: PaginationProps) => (
  <Content>
    <PaginationUI
      color="primary"
      page={page}
      count={totalPages}
      boundaryCount={2}
      siblingCount={0}
      size="small"
      onChange={handleChangePage}
    />
  </Content>
)

Pagination.defaultProps = {
  totalPages: 1,
}
export default Pagination
