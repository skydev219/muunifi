import { useEffect, useState, useRef } from "react";
import styles from "./CreatorsFeatures.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import Image from "next/image"

const CreatorsFeatures = ({ isActive, setCanSlide }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const ref = useRef(null)
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const videoRef3 = useRef(null)
  const videoRef4 = useRef(null)
  const [w, setW] = useState(null)

  useEffect(() => {
    if (isActive) {

      setW(window)

      setTimeout(() => {
        setPlay1(true)
      }, 200)

      setTimeout(() => {
        setPlay2(true)
      }, 500)

      setTimeout(() => {
        setPlay4(true)
      }, 1000)

      setTimeout(() => {
        videoRef1?.current?.play()
        videoRef2?.current?.play()
        videoRef3?.current?.play()
        videoRef4?.current?.play()
      }, 2000)

    }
  }, [isActive])

  return (
    <section ref={ref} className={`${styles.root}`}>
      <Container>
        <Row className="pb-5">
          <Col className={`${styles.column1} ${play2 ? 'play' : ''} order-2 order-lg-1`} lg={6}>
            <div className={`${styles.blockShape}`}>
              <Shape isSquare play={play4} />
            </div>
            <Image
              width="600"
              height="513"
              quality="85"
              className={`${styles.image} entry-op-2`}
              src="/images/content-creators-1.png"
            />
          </Col>
          <Col lg={6} className={`position-relative d-flex align-items-center order-1 order-lg-2 ps-4 ${play4 ? 'play' : ''}`}>
            <div>
              <div onMouseOver={() => videoRef1.current?.play()} className={`${styles.row} entry-d-1`}>
                <div className={`${styles.icon}`}>
                  {w?.innerWidth > 1000 ?
                    <video
                      ref={videoRef1}
                      className={`entry-op-4`}
                      width="54"
                      height="54"
                      muted
                    >
                      <source src="/animations/money-bag-1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    <Image
                      width="54"
                      height="54"
                      quality="85"
                      src="/images/creators-icon-1.png"
                    />
                  }
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Tools to monetize</h3>
                  <p className={`${ts.textRegular} mb-0`}>We believe the first step in building a safe</p>
                </div>
              </div>

              <div onMouseOver={() => videoRef2.current?.play()} className={`${styles.row} entry-d-2`}>
                <div className={`${styles.icon}`}>
                  {w?.innerWidth > 1000 ?
                    <video
                      ref={videoRef2}
                      className={`entry-op-4`}
                      width="54"
                      height="54"
                      muted
                    >
                      <source src="/animations/pie-chart.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    <Image
                      width="54"
                      height="54"
                      quality="85"
                      src="/images/creators-icon-2.png"
                    />
                  }
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Invest in other creators</h3>
                  <p className={`${ts.textRegular} mb-0`}>We have built our platform for you</p>
                </div>
              </div>

              <div onMouseOver={() => videoRef3.current?.play()} className={`${styles.row} entry-d-3`}>
                <div className={`${styles.icon}`}>
                  {w?.innerWidth > 1000 ?
                    <video
                      ref={videoRef3}
                      width="54"
                      height="54"
                      muted
                    >
                      <source src="/animations/line-chart.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    <Image
                      width="54"
                      height="54"
                      quality="85"
                      src="/images/creators-icon-3.png"
                    />
                  }
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Analytics to help grow your brand</h3>
                  <p className={`${ts.textRegular} mb-0`}>support and empower our creators</p>
                </div>
              </div>

              <div onMouseOver={() => videoRef4.current?.play()} className={`${styles.row} entry-d-4`}>
                <div className={`${styles.icon}`}>
                  {w?.innerWidth > 1000 ?
                    <video
                      ref={videoRef4}
                      width="54"
                      height="54"
                      muted
                    >
                      <source src="/animations/controls.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    :
                    <Image
                      width="54"
                      height="54"
                      quality="85"
                      src="/images/creators-icon-4.png"
                    />
                  }
                </div>
                <div>
                  <h3 className={`${ts.title3}`}>Tools to better engage w/ community</h3>
                  <p className={`${ts.textRegular} mb-0`}>It's time you stop building on someone</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-0 pt-lg-5">
          <Col lg={6} className="position-relative d-flex align-items-center">
            <div>
              <h2 className={`${ts.title} mb-4 ${play2 ? 'play' : ''}`}>
                <div data-splitting>Build</div>
                <div className="d1" data-splitting>Bounty</div>
              </h2>
              <div className={`${play2 ? 'play' : ''}`}>
                <p className={`${ts.textRegular} entry-op-2`}>
                  We have reserved <strong>20% of our data</strong> company in the form of bounties. We want our top creators having skin in the game. Things we look at are...
                </p>
              </div>
            </div>
          </Col>
          <Col className={`${styles.column1} ${play2 ? 'play' : ''}`} lg={6}>
            <div className={`${styles.blockShape}`}>
              <Shape isSquare play={play4} />
            </div>
            <img className={`${styles.chart} entry-2`} src="/images/creators-chart.svg" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreatorsFeatures;