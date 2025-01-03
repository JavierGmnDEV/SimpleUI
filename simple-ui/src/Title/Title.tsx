import {  FC, PropsWithChildren } from "react"

export const Title : FC<PropsWithChildren>= ({children}) => {
  return (
    <div className="text-6xl font-bold underline text-center">{children}</div>
  )
}
