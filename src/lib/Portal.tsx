import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
interface PortalProps {
  selector: string
}

const Portal: React.FC<PortalProps> = ({ selector, children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}

export default Portal