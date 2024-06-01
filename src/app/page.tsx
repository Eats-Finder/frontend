import Button from "@/componets/atoms/button/Button"
import { SbuttonSize, Scolors } from "@/styles/styleCore"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        content="Button"
        customStyle={`${Scolors.bg.primary[700]} ${Scolors.text.error} ${SbuttonSize.m}`}
      />
    </main>
  )
}
