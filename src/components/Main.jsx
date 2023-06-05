import React from "react"
import Films from "./Films"
import Navigation from "./Navigation"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function Main() {
  return (
    <>
      {/* <Films /> */}
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main
