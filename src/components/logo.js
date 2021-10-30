import React from "react"
import { Link } from "gatsby"

const Logo = props => (
  <div className="site-logo">
    <div class="inline"><img alt="sun" src="/assets/suntransparent.png" width="40px"/></div>
    <Link to="/">{props.title}</Link>
  </div>
  
)

export default Logo
