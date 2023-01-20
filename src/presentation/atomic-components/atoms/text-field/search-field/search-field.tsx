import { Dispatch, FC, SetStateAction } from 'react'
import { FiSearch } from 'react-icons/fi'

import TextFieldBase from '../text-field-base'

const SearchField: FC<{
  setSearch: Dispatch<SetStateAction<string>>
  search: string
}> = ({ ...props }) => (
  <TextFieldBase
    size="small"
    startIcon={FiSearch}
    value={props.search ?? undefined}
    onChange={(e: { target: { value: string } }): void => props.setSearch(e.target.value)}
    placeholder="Pesquisar"
  />
)

export default SearchField
