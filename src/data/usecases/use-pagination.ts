import { Dispatch, SetStateAction, useState } from 'react'

const usePagination = (): {
  page: number
  handleChangePage: (_event: unknown, newPage: number) => void
  setPage: Dispatch<SetStateAction<number>>
} => {
  const [page, setPage] = useState(1)

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage)
  }

  return { page, handleChangePage, setPage }
}

export default usePagination
