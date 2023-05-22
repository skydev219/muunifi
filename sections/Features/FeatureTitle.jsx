import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const FeatureMobileTitle = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play2, setPlay2] = useState(false)
  const videoRef = useRef(null)
  const ref = useRef(null)

  useEffect(() => {
    if (isActive) {
      // setTimeout(() => {
      //   setPlay2(true)
      // }, 500)

      // setTimeout(() => {
      //   setPlay3(true)
      //   videoRef.current.play()
      // }, 1000)
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.featureSection}`}>

      <div className={`${styles.titleContainer}`}>
        <Container>
          <div>
            <h1 >

            "THES WORLD'S SAFTEST AND BEST
            SOCIAL MEDIA BUILT FOR FINANCIAL COMMUNITIES"

            </h1>
          </div>
          {/* <Row>
            <Col className="position-relative">
              <h1 className={`${styles.heading} ${play2 ? 'play' : ''}`}>
              <div className="h3" data-splitting>THES WORLD'S SAFTEST AND BEST</div>
                <div className="h3" data-splitting>SOCIAL MEDIA BUILT FOR FINANCIAL COMMUNITIES"</div>

              </h1>
              <div className={`${styles.likeAnimation} ${play3 ? 'active' : ''}`}>
                <div className={`${styles.likeBg}`}>
                  <Image
                    src="/images/like.svg"
                    alt="like bg"
                    width={237}
                    height={237}
                  />
                </div>
                <video
                  ref={videoRef}
                  className={`${styles.likeVideo}`}
                  width="115"
                  height="115"
                  muted="muted"
                >
                  <source src="/animations/like.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobileTitle;