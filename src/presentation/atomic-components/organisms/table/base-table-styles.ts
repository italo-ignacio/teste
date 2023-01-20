import * as TableUI from '@mui/material'
import { styled } from 'stitches.config'

export const Table = styled(TableUI.Table, {})

export const TableBody = styled(TableUI.TableBody, {
  '.MuiTableRow-root': {
    border: '1px solid #DFDFDF !important',
  },
  '.MuiTableContainer-root': {
    color: 'red !important',
  },
  '.none': {
    border: '0 !important',
    padding: '0.39rem !important',
  },

  '.MuiTableCell-root': {
    padding: '12px',
    '&:first-child': {
      padding: '12px 32px',
    },
    '@laptop': {
      paddingLeft: '12px 0',
    },
  },
})

export const TableCell = styled(TableUI.TableCell, {
  border: '0 !important',
})

export const Actions = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  gap: '1rem',
})

export const ActionItem = styled('div', {
  display: 'flex',
  svg: {
    cursor: 'pointer',
  },
})

export const Text = styled('div', {
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '-webkit-line-clamp': '1',
  lineClamp: '1',
  '-webkit-box-orient': 'vertical',
  wordBreak: 'break-all',
})

export const TableContainer = styled(TableUI.TableContainer, {})

export const TableRow = styled(TableUI.TableRow, {
  '.MuiTableCell-root': {
    color: '$font',
  },
})

export const TableHead = styled(TableUI.TableHead, {
  '.MuiTableCell-root': {
    paddingBottom: '2.8rem',
    paddingLeft: '0',
    color: '$font',
    '&:first-child': {
      paddingLeft: '32px',
    },
  },
})
