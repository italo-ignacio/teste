import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import useDebounce from './use-debounce'

type useSearchProps = {
  page: number
  search: string | null
  setPage: Dispatch<SetStateAction<number>>
}

type useSearchResponse = {
  page: number
  search: string | null
}

const useDataSearch = (props: useSearchProps): { data: useSearchResponse } => {
  const [call, setCall] = useState(true)
  const [data, setData] = useState<useSearchResponse>({
    page: props.page,
    search: props.search,
  })

  useEffect(
    () =>
      setData({
        page: props.page,
        search: props.search,
      }),
    [props.page, call]
  )

  useDebounce(() => (props.page === 1 ? setCall(!call) : props.setPage(1)), [props.search], 500)

  return { data }
}

export default useDataSearch
