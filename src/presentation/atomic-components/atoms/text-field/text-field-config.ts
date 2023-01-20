import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

export type IInput = {
  label?: string
  startIcon?: IconType
  endIcon?: IconType
  size?: 'small' | 'medium'
  backgroundFill?: boolean
  passwordFieldConfig?: () => void

  variant?: 'filled' | 'outlined' | 'standard'
  type?: 'text' | 'email' | 'password' | 'number'
  fullWidth?: boolean
  disable?: boolean
  required?: boolean
  error?: boolean
  minRows?: number | undefined
  maxRows?: number | undefined
  placeholder?: string
  select?: boolean
  value?: string
  children?: ReactNode
  defaultValue?: string
  textArea?: boolean
  onChange?: (e: {
    target: {
      value: string
    }
  }) => void
}
export interface IUnitInput extends Omit<IInput, 'value'> {
  value?: { firstValue: string; secondValue: string }
}
