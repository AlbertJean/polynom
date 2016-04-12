import "./styles"

import React from "react"

const Logo = ({ size }) => (
  <svg
    className="ad-Logo"
    height={ size }
    style={{ height: size }}
    viewBox="0 0 70 108.667">
    <path d="M52.2,8.489A45.826,45.826,0,0,0,34.84,3.9H15.611V0.976A0.976,0.976,
      0,0,0,14.635,0H0.976A0.976,0.976,0,0,0,0,.976v13.66a0.976,0.976,0,0,0,.976
      .976h13.66a0.976,0.976,0,0,0,.976-0.976V11.708H34.829c1.116,0,27.33.457,
      27.33,27.319S35.945,66.346,34.84,66.346H34.05a1.951,1.951,0,0,0-1.4.594L
      9.482,90.86a0.976,0.976,0,0,1-1.677-.679V43.906a0.976,0.976,0,0,1,.976
      -0.976H27.319v2.927a0.976,0.976,0,0,0,.976.976h13.66a0.976,0.976,0,0,0,
      .976-0.976V32.2a0.976,0.976,0,0,0-.976-0.976H28.295a0.976,0.976,0,0,0
      -.976.976v2.927H1.951A1.951,1.951,0,0,0,0,37.076v69.636a1.951,1.951,0,0,0,
      3.334,1.377L36.17,75.124a1.926,1.926,0,0,1,1.191-.564A43.006,43.006,0,0,0,
      52.268,70.38C60.373,66.327,70,57.556,70,39.434S60.3,12.542,52.2,8.489ZM
      9.757,9.757h-3.9v-3.9h3.9v3.9ZM33.173,37.076h3.9v3.9h-3.9v-3.9Z"/>
  </svg>
)

Logo.defaultProps = { size: "1rem" }

export default Logo
