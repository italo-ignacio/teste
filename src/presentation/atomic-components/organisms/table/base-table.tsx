import { FC, ReactNode } from 'react'

import { Table, TableBody, TableContainer, TableHead } from './base-table-styles'

type BaseTableProps = {
  headerRow: ReactNode
  bodyRows: ReactNode
}

const BaseTable: FC<BaseTableProps> = ({ headerRow, bodyRows }: BaseTableProps) => (
  <TableContainer>
    <Table>
      <TableHead>{headerRow}</TableHead>
      <TableBody>{bodyRows}</TableBody>
    </Table>
  </TableContainer>
)

export default BaseTable
