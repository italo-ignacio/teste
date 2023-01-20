import { styled as styledUI, TextField } from '@mui/material'
import { styled } from 'stitches.config'

export const InputContainer = styled('div', {
  position: 'relative',
  color: '$gray350',

  '& .startInputIcon': {
    position: 'absolute',
    top: '33%',
    fontSize: '$20',
    marginLeft: '12px',
    zIndex: '$overElement',
  },

  '& .endInputIcon': {
    position: 'absolute',
    top: '33%',
    fontSize: '$20',
    marginLeft: '-32px',
    zIndex: '$overElement',
  },

  variants: {
    size: {
      small: {
        '& .startInputIcon, & .endInputIcon': {
          top: '27%',
        },
      },
    },
    isPassword: {
      true: {
        '& .endInputIcon': {
          cursor: 'pointer',
        },
      },
    },
    disabled: {
      true: {
        color: '$gray500',
      },
    },
    multiline: {
      true: {
        '& .startInputIcon, & .endInputIcon': {
          display: 'none',
        },
      },
    },
  },
})

const TextFieldCustomLabels = styledUI(TextField)({})

export const StyledInput = styled(TextFieldCustomLabels, {
  '& .MuiOutlinedInput-root': {
    borderRadius: '$sm',
    color: '$gray500',
    alignItems: 'center',
  },

  variants: {
    hasStartIcon: {
      true: {
        '& .MuiOutlinedInput-root': {
          paddingLeft: '22px',
        },
      },
    },

    hasEndIcon: {
      true: {
        '& .MuiOutlinedInput-root': {
          paddingRight: '25px',
        },
      },
    },

    backgroundFill: {
      true: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: '$white',
        },
      },
      false: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'transparent',
        },
      },
    },

    disable: {
      true: {
        '& .MuiOutlinedInput-root': {
          backgroundColor: '$gray100 !important',
          pointerEvents: 'none !important',

          '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
            '-webkit-text-fill-color': '#818181',
          },

          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      },
    },
    textArea: {
      true: {
        '& .MuiOutlinedInput-root': {
          maxHeight: '120px !important',
        },
        '& .MuiOutlinedInput-root:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            top: '-4.5px',
          },
        },
      },
    },
  },
})
