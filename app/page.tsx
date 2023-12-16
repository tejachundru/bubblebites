/* eslint-disable react/no-unescaped-entities */

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import PageContainer from "@/components/page-container"

export default function IndexPage() {
  return (
    <PageContainer>
      <div className="flex flex-col items-center gap-2">
        <Icons.logo />
        <h1 className="color-white bg-clip-text text-8xl ">Bubble Bites</h1>
        <p className="max-w-[700px] text-3xl text-muted-foreground">
          Quick Eats, Happy Treats
        </p>

        <p className="max-w-[700px] text-xl text-muted-foreground">
          <b>"Welcome to "Bubble Bites"</b> – Where Freshness Reigns!
        </p>
        <p className="max-w-[700px] text-center text-lg text-muted-foreground">
          No Tasting salts/Food Colors, just pure delight. Locally-sourced
          ingredients, bursting with flavor. Taste the best at "Bubble Bites"!"
        </p>
        <Button variant={"outline"} className="btn-outline btn mt-4">
          <Link href="/menu">View Menu</Link>
          <Icons.chevronRight className="mr-2 h-4 w-4" />
        </Button>
        <Button variant={"outline"}>
          <Link
            className="btn-primary btn mt-4"
            href={"https://maps.app.goo.gl/SDe8TTipyYExBKTS7"}
            target="_blank"
          >
            Get Directions
          </Link>
        </Button>
      </div>
    </PageContainer>
  )
}
