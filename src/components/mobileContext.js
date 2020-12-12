import React from 'react'
import window from 'global'

const MobileContext = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  return {
    width,
  }
}

export default MobileContext
