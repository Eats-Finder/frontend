import Button from "@/componets/atoms/button/Button"
import { SbuttonSize, Scolors } from "@/styles/styleCore"

export default function Home() {
  console.log(true ? "w-[160px] h-[60px]" : SbuttonSize.m)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        content="Button"
        // customStyle={`${Scolors.bg.primary[800]} ${Scolors.text.error} ${SbuttonSize.m}`}
      />
    </main>
  )
}
