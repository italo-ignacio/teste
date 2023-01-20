import { useState, useEffect } from 'react'
import { SearchField } from 'presentation/atomic-components/atoms/text-field'
import { Button } from '@mui/material'
import { NextPage } from 'next'
import { useDataSearch, usePagination } from 'data/usecases'
import { AxiosResponse } from 'axios'
import { IProposalsApiResponse } from 'domain/proposal'
import { UserTable } from 'presentation/atomic-components/organisms/table'
import Pagination from 'presentation/atomic-components/molecules/pagination/pagination'
import { TableSkeleton } from 'presentation/atomic-components/molecules/skeleton'
import { Api, ApiRoutes } from 'infra/http'
import { useRouter } from 'next/router'

const ProposalControlPage: NextPage = () => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  const { page, handleChangePage, setPage } = usePagination()
  const { data } = useDataSearch({ page, search, setPage })
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState<AxiosResponse<IProposalsApiResponse> | undefined>(undefined)

  useEffect(() => {
    const a = async (): Promise<void> => {
      setLoading(true)
      try {
        setQuery(
          await Api.get(`${ApiRoutes.proposals}?page=${page}&limit=5${data.search ? `&search=${data.search} ` : ''} `)
        )
        setLoading(false)
      } catch (error) {
        a()
      }
    }
    a()
  }, [data])

  return (
    <div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Button onClick={(): Promise<boolean> => router.push('/')}>Query</Button>
        <Button onClick={(): Promise<boolean> => router.push('/a')}>Axios</Button>
      </div>
      <br />
      <h1>Proposals</h1>
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '14px',
        }}
      >
        <SearchField setSearch={setSearch} search={search} />
      </div>
      <div>
        {loading ? (
          <TableSkeleton />
        ) : (
          <>
            <UserTable data={query?.data as IProposalsApiResponse} />{' '}
            <Pagination
              page={page}
              totalPages={Math.ceil((query?.data.totalElements as number) / (query?.data.limit as number))}
              handleChangePage={handleChangePage}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default ProposalControlPage
