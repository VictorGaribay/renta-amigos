import React from 'react'
import { ButtonP } from 'src/styles/globalStyled'

interface ButtonProps {
  type?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  label: string
}

const Button: React.FC<ButtonProps> = ({ onClick, label, ...props }) => {
  return (
    <ButtonP onClick={onClick} {...props}>
      {label}
    </ButtonP>
  )
}

export default Button
