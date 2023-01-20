import { PaginationType } from './pagination'

export interface IProposals {
  etapa: number
  proposta: number
  nome: string
  produto: string
  cnpj: number
  unidade: number
  status: number
  id: string
}

export interface IProposalsApiResponse extends PaginationType {
  content: IProposals[]
}

export interface IProposalsQueryProps {
  page: number
  search: string | null
}
