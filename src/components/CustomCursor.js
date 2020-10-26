import React, { useEffect, useState } from "react"

// STYLED-COMPONENT
import { Customursor } from "../styles/globalStyles"

// CONTEXT
import { useGlobalStateContext } from "../context/globalContext"

const Cursor = () => {
  const { cursorType } = useGlobalStateContext()
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  const onMouseMove = e => {
    // const { pageX: x, pageY: y } = e
    const { clientX: x, clientY: y } = e

    setMousePosition({ x, y })
  }

  return (
    <>
      <Customursor
        className={`${cursorType ? "hovered" : ""} ${cursorType}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  )
}

export default Cursor
