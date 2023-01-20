import { FC, ReactNode } from 'react'
import { ImFilesEmpty } from 'react-icons/im'
import { UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'
import { IProposalsApiResponse } from 'domain/proposal'
import { HandleChangePage } from 'domain/handle-change-page'
import QueryManager from 'presentation/atomic-components/molecules/query-manager/query-manager'
import Pagination from 'presentation/atomic-components/molecules/pagination/pagination'

export interface PaginationQueryResponseControllerProps {
  query: UseQueryResult<AxiosResponse<IProposalsApiResponse>, unknown>
  data: IProposalsApiResponse | undefined
  handleChangePage: HandleChangePage
  page: number
  skeleton: ReactNode
  children: ReactNode
}

const PaginationQueryResponseController: FC<PaginationQueryResponseControllerProps> = ({
  data,
  query,
  page,
  handleChangePage,
  children,
  skeleton,
}) => (
  <QueryManager query={query} skeleton={skeleton}>
    {query.isSuccess &&
      (data?.totalElements === 0 || data === undefined ? (
        <div>
          <ImFilesEmpty /> Nenhum registro encontrado
        </div>
      ) : (
        <div>
          {children}
          <Pagination
            page={page}
            totalPages={Math.ceil(data.totalElements / data.limit)}
            handleChangePage={handleChangePage}
          />
        </div>
      ))}
  </QueryManager>
)

export default PaginationQueryResponseController
