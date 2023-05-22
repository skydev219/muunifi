import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const Phone = ({ step, isActive, children, isHide, isOverflow }) => {


  return (
    <div className={`${styles.phoneMobile} ${isActive ? 'active' : ''}`}>
      <div className={`${styles.phoneMobileBg} ${isHide ? 'hide' : ''}`}>
        <Image
          src="/images/phone.png"
          alt="phone bg"
          width={331}
          height={671}
        />
      </div>
      <div className={`${styles.videoMobileContainer} ${isOverflow ? 'visible' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Phone;