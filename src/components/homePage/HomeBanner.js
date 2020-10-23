import React, { useEffect, useRef } from "react"

// STYLED-COMPONENT
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"
// Custom Hook
import useWindowSize from "../../hooks/useWindowSize"
// Context
import { useGlobalStateContext } from "../../context/globalContext"

const HomeBanner = () => {
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  let canvas = useRef(null)

  useEffect(() => {
    let renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode()
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")
    let lastX
    let lastY
    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", ev => {
      moving = true
      lastX = ev.pageX - renderingElement.offsetLeft
      lastY = ev.pageY - renderingElement.offsetTop
    })

    // renderingElement.addEventListener("mouseup", ev => {
    //   moving = false
    //   lastX = ev.pageX - renderingElement.offsetLeft
    //   lastY = ev.pageY - renderingElement.offsetTop
    // })

    renderingElement.addEventListener("mousemove", ev => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = ev.pageX - renderingElement.offsetLeft
        let currentY = ev.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [])

  return (
    <Banner>
      <Video>
        {/* <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/video/video.mp4")}
        /> */}
      </Video>
      <Canvas
        ref={canvas}
        width={size.width}
        height={size.height}
        // onMouseEnter={() => onCursor("hovered")}
        // onMouseLeave={onCursor}
      />
      {/* <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle> */}
    </Banner>
  )
}

export default HomeBanner
