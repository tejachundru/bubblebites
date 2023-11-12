import React from "react"
import Image from "next/image"

import PageContainer from "@/components/page-container"

import first from "/1.jpg"

const Menu = () => {
  return (
    <PageContainer>
      <h1 className="color-white bg-clip-text text-8xl ">Menu</h1>
      <Image
        src={"/menu-1.jpg"}
        alt="Menu"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
      <Image
        src={"/menu-2.jpg"}
        alt="Menu"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
      <Image
        src={"/menu-3.jpg"}
        alt="Menu"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />
    </PageContainer>
  )
}

export default Menu
