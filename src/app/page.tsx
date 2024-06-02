"use client"
import Button from "@/componets/atoms/button/Button"
import { SbuttonSize, Scolors } from "@/styles/styleCore"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        content="Button"
        onClick={() => console.log("click")}
        // customStyle={`${Scolors.bg.primary[800]} ${Scolors.text.error} ${SbuttonSize.m}`}
        className={`border-[1px] border-solid border-primary-400 hover:bg-white hover:text-primary-400 disabled:bg-primary-50 disabled:text-primary-200`}
        disabled
      />
    </main>
  )
}
