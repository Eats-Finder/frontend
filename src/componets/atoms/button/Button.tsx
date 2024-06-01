"use client"
import { SbuttonSize, Scenter, Scolors } from "@/styles/styleCore"
import React from "react"

interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  content: string
  customStyle?: string
}

const Button = ({ content, disabled, customStyle, ...props }: IButton) => {
  return (
    <button
      className={`${Scenter} ${SbuttonSize.s} ${Scolors.bg.primary[400]} ${Scolors.text.white} rounded-[16px] typo-body-16 ${customStyle}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
