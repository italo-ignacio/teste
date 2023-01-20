import { useState } from 'react'
import { SearchField } from 'presentation/atomic-components/atoms/text-field'
import { Button } from '@mui/material'
import { NextPage } from 'next'
import { useDataSearch, usePagination } from 'data/usecases'
import useGetAllProposalsQuery from 'infra/cache/queries/proposal-querie'
import ProposalsTablePagination from 'presentation/atomic-components/organisms/pagination-query-response-controller/proposal-table-pagination/proposal-table-pagination'
import { useRouter } from 'next/router'

const ProposalControlPage: NextPage = () => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  const { page, handleChangePage, setPage } = usePagination()
  const { data } = useDataSearch({ page, search, setPage })
  const query = useGetAllProposalsQuery(data)
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
      <ProposalsTablePagination data={query.data?.data} page={page} query={query} handleChangePage={handleChangePage} />
    </div>
  )
}

export default ProposalControlPage
