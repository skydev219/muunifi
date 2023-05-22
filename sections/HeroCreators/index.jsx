import { useEffect, useState, useRef } from "react";
import styles from "./HeroCreators.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import ts from "../../styles/global/typography.module.scss"
import Image from "next/image"

const HeroCreators = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [play2, setPlay2] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setPlaySplitting(true)
    }, 500)

    setTimeout(() => {
      setPlay(true)
    }, 1000)

    setTimeout(() => {
      setPlay2(true)
      videoRef.current.play()
    }, 1200)
  }, [])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${styles.col1} text-center`} lg={12}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>CONTENT</div>
              <div className="d1" data-splitting>CREATORS</div>
              <div className={`${styles.likeAnimation} ${play2 ? 'active' : ''}`}>
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
            </h1>
            <div className={`${styles.text} ${play ? 'play' : ''}`}>
              <p className={`${ts.textRegular} text-center entry-d-1`}>We have built our platform for you. We believe the first step in building a safe ecosystem is to support and empower our creators.</p>
              <p className={`${ts.textRegular} text-center entry-d-2`}>It's time you stop building on someone else's network, come build on the network <strong>YOU</strong> own!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroCreators;