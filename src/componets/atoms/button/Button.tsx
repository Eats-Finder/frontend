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
}

const Button = ({
  content,
  className,
  disabled,
  onClick,
  ...props
}: IButton) => {
  return (
    <button
      className={`${Scenter} ${SbuttonSize.s} ${Scolors.bg.primary[400]} ${Scolors.text.white} rounded-[16px] ${SfontSize[16]} hover:bg-primary-500 hover:text-white disabled:cursor-not-allowed disabled:border-none disabled:bg-primary-50 disabled:text-primary-200 ${Stransition} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
