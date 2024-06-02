"use client"
import {
  SbuttonSize,
  Scenter,
  Scolors,
  SfontSize,
  Stransition,
} from "@/styles/styleCore"
import React from "react"

interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  content: string
  customStyle?: string
}

const Button = ({ content, disabled, customStyle, ...props }: IButton) => {
  return (
    <button
      className={`${Scenter} ${SbuttonSize.s} ${Scolors.bg.primary[400]} ${Scolors.text.white} rounded-[16px] ${SfontSize[16]} hover:bg-primary-500 hover:text-white disabled:bg-primary-50 disabled:text-primary-200 ${Stransition} ${customStyle}`}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
