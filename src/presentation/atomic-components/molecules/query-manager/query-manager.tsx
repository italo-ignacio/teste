import { FC, ReactNode } from 'react'
import { BiErrorAlt } from 'react-icons/bi'
import { QueryObserverResult, UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'
import { Button, Fade } from '@mui/material'
import { IProposalsApiResponse } from 'domain/proposal'

type QueryManagerProps = {
  query: UseQueryResult<AxiosResponse<IProposalsApiResponse>>
  children: ReactNode
  skeleton: ReactNode
}

const QueryManager: FC<QueryManagerProps> = ({ query, children, skeleton }) => {
  if (query.isLoading || (query.isFetching && !query.isFetched)) return <div> {skeleton} </div>

  if (query.isError)
    return (
      <Fade in>
        <div>
          <BiErrorAlt />
          <h1>Parece que houve um erro ao carregar os dados.</h1>
          <Button
            variant="outlined"
            onClick={(): Promise<QueryObserverResult<AxiosResponse<IProposalsApiResponse>>> => query.refetch()}
          >
            Tentar novamente
          </Button>
        </div>
      </Fade>
    )

  return <div>{children}</div>
}

export default QueryManager
