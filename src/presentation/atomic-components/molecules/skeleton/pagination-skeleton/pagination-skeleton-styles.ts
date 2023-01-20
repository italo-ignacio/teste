import { styled } from 'stitches.config'

export const PaginationSkeletonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '1.14rem',
  '.MuiSkeleton-root': {
    height: '22px',
    width: '22px',
  },
})

export default PaginationSkeletonContainer
