import React, { ButtonHTMLAttributes } from "react"

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: IButton) => {
  // const
  return <div>Button</div>
}

export default Button
