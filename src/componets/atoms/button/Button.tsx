"use client"
import { colors } from "@/styles/styleCore"
import React from "react"

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  content: string
  disabled?: boolean
}

const Button = ({ content, disabled, ...props }: IButton) => {
  const color = `${colors.primary[800]}`
  return (
    <button className={"bg-primary-400"} disabled={disabled} {...props}>
      {content}
    </button>
  )
}

export default Button
