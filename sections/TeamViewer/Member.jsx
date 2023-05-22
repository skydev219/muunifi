import { useEffect, useState, useRef } from "react";
import styles from "./TeamViewer.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"

const Member = ({ name, role, image, isActive, index }) => {

  const [play, setPlay] = useState(false)

  useEffect(() => {
    if (isActive) {
      setPlay(true)
    }
  }, [isActive])

  return (
    <div className={`${play ? 'play' : ''}`}>
      <div className={`entry-d-${index + 2}`}>
        <div className={`${styles.member} mb-5 pb-3`}>
          <div className={`${styles.memberImg}`}>
            <Image
              src={`/images/team/${image}`}
              alt={name}
              layout="fill"
            />
          </div>
          <h3 className={`${ts.title3} mt-4`}>{name}</h3>
          <p className={`${ts.textRegular}`}>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default Member;