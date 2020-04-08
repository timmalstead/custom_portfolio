import React from "react"
import Footer from "./style"
import Context from "../ThemeContext"

const date = new Date().getFullYear()

const SiteFooter = () => (
  <Footer style={{ color: `${React.useContext(Context).styles.textColor}` }}>
    Copyright &copy; Timothy Malstead 2019-{date}
  </Footer>
)

export default SiteFooter
