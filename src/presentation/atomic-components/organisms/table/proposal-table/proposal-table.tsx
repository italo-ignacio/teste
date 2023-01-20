import { FC } from 'react'
import { IProposalsApiResponse } from 'domain/proposal'
import { TableCell, TableRow, Text } from '../base-table-styles'
import BaseTable from '../base-table'

type ProposalTableProps = {
  data: IProposalsApiResponse
}

const ProposalTable: FC<ProposalTableProps> = ({ data }: ProposalTableProps) => (
  <BaseTable
    headerRow={
      <TableRow>
        <TableCell>Etapa</TableCell>
        <TableCell>Proposta</TableCell>
        <TableCell>Nome</TableCell>
        <TableCell>Produto</TableCell>
        <TableCell>Cnpj</TableCell>
        <TableCell>Unidade</TableCell>
        <TableCell>Status</TableCell>
      </TableRow>
    }
    bodyRows={
      <>
        {data.content.map((Proposal) => (
          <>
            <TableRow key={Proposal.nome}>
              <TableCell>
                <Text>{Proposal.etapa}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.proposta}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.nome}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.produto}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.cnpj}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.unidade}</Text>
              </TableCell>
              <TableCell>
                <Text>{Proposal.status}</Text>
              </TableCell>
            </TableRow>
            <TableRow className="none">
              <TableCell className="none" />
            </TableRow>
          </>
        ))}
      </>
    }
  />
)

export default ProposalTable
