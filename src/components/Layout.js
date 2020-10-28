import React from "react"
import Nav from "./Nav"

export default function Layout(props) {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}
