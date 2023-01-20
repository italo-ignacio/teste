import { FC } from 'react'
import { IProposalsApiResponse } from 'domain/proposal'
import TableSkeleton from 'presentation/atomic-components/molecules/skeleton/table-skeleton/table-skeleton'

import { UserTable } from '../../table'
import PaginationQueryResponseController, {
  PaginationQueryResponseControllerProps,
} from '../pagination-query-response-controller'

const ProposalsTablePagination: FC<Omit<PaginationQueryResponseControllerProps, 'skeleton' | 'children'>> = ({
  ...props
}) => (
  <PaginationQueryResponseController
    data={props.data}
    handleChangePage={props.handleChangePage}
    page={props.page}
    query={props.query}
    skeleton={<TableSkeleton />}
  >
    <UserTable data={props.data as IProposalsApiResponse} />
  </PaginationQueryResponseController>
)

export default ProposalsTablePagination
