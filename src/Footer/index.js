import React from "react"
import Footer from "./style"

const date = new Date().getFullYear()

const SiteFooter = () => (
  <Footer>Copyright &copy; Timothy Malstead 2019-{date}</Footer>
)

export default SiteFooter
