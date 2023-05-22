import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Phone = ({ step, isActive, children, isHide, isOverflow }) => {


  return (
    <div className={`${styles.phone} ${isActive ? 'active' : ''}`}>
      <div className={`${styles.phoneBg} ${isHide ? 'hide' : ''}`}>
        <Image
          src="/images/phone.png"
          alt="phone bg"
          width={331}
          height={671}
        />
      </div>
      <div className={`${styles.videoContainer} ${isOverflow ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Phone;