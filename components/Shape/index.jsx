import React, { useState, useEffect } from "react"
import styles from "./Shape.module.scss"

const Shape = React.forwardRef((props, ref) => {

  const { play, isSquare, isLarge } = props

  const [w, setW] = useState(ref?.current ? ref?.current.offsetWidth : isSquare ? 1002 : isLarge ? 1000 : 1241)
  const [h, setH] = useState(ref?.current ? ref?.current.offsetHeight : isSquare ? 1000 : isLarge ? 1500 : 552)

  useEffect(() => {
    if (ref?.current) {
      setW(ref?.current ? ref?.current.offsetWidth : isSquare ? 1002 : isLarge ? 1000 : 1241)
      setH(ref?.current ? ref?.current.offsetHeight : isSquare ? 1000 : isLarge ? 1500 : 552)
    }
  }, [ref])

  return (
    <svg className={`${styles.root} ${isLarge ? 'large' : ''} ${play ? 'play' : ''}`} width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width={w - 2} height={h - 2} rx={ref ? w/10 : "133.5"} fill="white" fillOpacity="0.1" stroke="white" />
    </svg>
  )
})

Shape.displayName = 'Shape';

export default Shape;