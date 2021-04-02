import React, { FormEvent, useState } from "react"
import styled from "styled-components"
import ArrowButton from "./Button/arrow-button"

interface InputFieldProps {
  placeholder: string
}

const FieldContaier = styled.div`
  display: flex;
  height: 66px;
  align-items: center;
  border-radius: 4px;
  margin: 4px 0;
  padding-right: 16px;
  background-color: ${({ theme: { colours } }) => colours.primary.white};
`

const StyledInput = styled.input`
  border: none;
  flex-grow: 1;
  height: 100%;
  margin-right: 16px;
  font-size: ${({ theme: { text } }) => text.smallFont}
  line-height: ${({ theme: { text } }) => text.smallLineHeight}
`

const InputField = ({ placeholder }: InputFieldProps) => {
  const [value, setValue] = useState("")

  const onChange = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => setValue(value)

  const clearForm = () => setValue("")

  const onSubmit = (e?: any) => {
    e && e.preventDefault()
    clearForm()
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldContaier>
        <StyledInput
          placeholder={placeholder}
          type="email"
          value={value}
          onChange={onChange}
        />
        <ArrowButton onClick={onSubmit} />
      </FieldContaier>
    </form>
  )
}

export default InputField
