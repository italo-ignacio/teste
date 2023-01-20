import { FC } from 'react'

import { InputContainer, StyledInput } from './text-field-base-styles'
import { IInput, IUnitInput } from './text-field-config'

const TextFieldBase: FC<IInput | IUnitInput> = ({
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: IInput | IUnitInput) => (
  <InputContainer
    size={props.size === 'small' ? props.size : undefined}
    isPassword={!!props.passwordFieldConfig}
    disabled={props.disable}
    multiline={props.textArea}
  >
    {!!StartIcon && <StartIcon className="startInputIcon" />}
    <StyledInput
      label={props.label}
      variant={props.variant}
      size={props.size}
      margin="none"
      onChange={props.onChange}
      hasStartIcon={!!StartIcon}
      hasEndIcon={!!EndIcon}
      backgroundFill={props.backgroundFill}
      disabled={props.disable}
      multiline={props.textArea}
      type={props.type}
      fullWidth={props.fullWidth}
      required={props.required}
      maxRows={props.maxRows}
      disable={props.disable}
      minRows={props.minRows}
      placeholder={props.placeholder}
      error={props.error}
      select={props.select}
      value={props.value}
      defaultValue={props.defaultValue}
      textArea={props.textArea}
      InputProps={{
        inputProps: { min: 0 },
      }}
    >
      {props.children}
    </StyledInput>
    {!!EndIcon && <EndIcon className="endInputIcon" />}
  </InputContainer>
)

TextFieldBase.defaultProps = {
  variant: 'outlined',
  backgroundFill: true,
  size: 'medium',
  startIcon: undefined,
  endIcon: undefined,
  label: undefined,
  passwordFieldConfig: undefined,
  type: 'text',
  fullWidth: true,
  disable: false,
  required: false,
  error: false,
  minRows: undefined,
  maxRows: undefined,
  placeholder: undefined,
  select: false,
  value: undefined,
  children: undefined,
  defaultValue: undefined,
  textArea: false,
  onChange: undefined,
}

export default TextFieldBase
