import { useQuery, UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'
import proposalRequests from 'infra/http/requests/proposals-requests'
import { IProposalsApiResponse, IProposalsQueryProps } from '../../../domain/proposal'

const useGetAllProposalsQuery = ({
  ...props
}: IProposalsQueryProps): UseQueryResult<AxiosResponse<IProposalsApiResponse>> =>
  useQuery<AxiosResponse<IProposalsApiResponse>>(['proposals', props.page, props.search], () =>
    proposalRequests.getAllProposals(props.page, props.search)
  )

export default useGetAllProposalsQuery
