import { styled } from 'stitches.config'

const SkeletonRow = styled('div', {
  width: 'auto',

  padding: '7.2px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  border: '1px solid #F3F3F3',

  paddingX: '30px',
  marginBottom: '12px',

  '& > div ': {
    flex: 1,
  },
})

export default SkeletonRow
