import { AxiosResponse } from 'axios'
import { IProposalsApiResponse } from '../../../domain/proposal'

import ApiRoutes from '../api-routes'
import api from '../axios-http-client'

const proposalRequests = {
  getAllProposals: async (page: number, searchProposal: string | null): Promise<AxiosResponse<IProposalsApiResponse>> =>
    api.get(`${ApiRoutes.proposals}?page=${page}&limit=5${searchProposal ? `&search=${searchProposal} ` : ''} `),
}

export default proposalRequests
