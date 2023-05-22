import { useState, useEffect } from "react"
import styles from "./Features.module.scss"

const Progress = ({ play, isActive }) => {

  const [p, setP] = useState(false)

  useEffect(() => {
    if (play && !p) {
      setP(true)
    } else {
      if (play) {
        setTimeout(() => {
          setP(true)
        }, 50)
        setP(false)
      }
    }
  }, [play])

  return (
    <div className={`${styles.progress} ${isActive ? 'active' : ''} ${p ? 'play' : ''}`}>

    </div>
  )
}

export default Progress;