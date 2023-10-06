import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <Icons.logo />
        <h1 className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-8xl text-transparent">
          Bubble Bites
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Restaurant you love
        </p>
      </div>
    </section>
  )
}
