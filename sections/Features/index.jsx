import { useEffect, useState, useRef, useMemo } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Phone from "./Phone";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"

const Features = ({ isActive, offsetBottom, offsetTop }) => {

  const [play3, setPlay3] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play6, setPlay6] = useState(false)
  const [playS1T1, setPlayS1T1] = useState(false)
  const [playS1T2, setPlayS1T2] = useState(false)
  const [step, setStep] = useState(0)
  const [isDisableScroll, setIsDisableScroll] = useState(false)
  const videoRef = useRef(null)
  const ref = useRef(null)
  const lastPos = useRef(0)
  const sStep = useRef(0)
  const del = useRef(0)
  const [active, setActive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onScroll = (e) => {
    setScrollPosition(window.pageYOffset)
  }


  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    if (scrollPosition > offsetTop && scrollPosition < height - offsetBottom - window.innerHeight) {
      setActive(true)
      setTimeout(() => {
        setPlay1(true)
      }, 500)

      setPlay2(true)

      setTimeout(() => {
        setPlay3(true)
        videoRef?.current?.play()
      }, 500)

      const p = ((scrollPosition - offsetTop) / (height - offsetTop - offsetBottom - offsetBottom) * 100)
      document.documentElement.style.setProperty('--scroll', p / 100);

      if (p > 0 && p < 5.6) {
        setStep(0)
      }
      if (p > 5.6 && p < 12) {
        setStep(1)
        setPlayS1T1(false)
        setPlayS1T2(false)
      }
      if (p > 12 && p < 20) {
        setPlayS1T1(true)
      }
      if (p > 16 && p < 24) {
        setPlayS1T2(true)
        setPlayS1T1(true)
        setStep(1)
      }
      if (p > 24 && p < 30) {
        setStep(2)
        setPlayS1T1(false)
        setPlayS1T2(false)
      }
      if (p > 30 && p < 36) {
        setPlayS1T1(true)
      }
      if (p > 34 && p < 40) {
        setPlayS1T2(true)
      }
      if (p > 46 && p < 50) {
        setPlayS1T2(true)
        setPlayS1T1(true)
        setStep(2)
      }
      if (p > 50 && p < 58) {
        setStep(3)
        setPlayS1T1(false)
        setPlayS1T2(false)
      }
      if (p > 58 && p < 60) {
        setPlayS1T1(true)
      }
      if (p > 66 && p < 76) {
        setPlayS1T2(true)
        setPlayS1T1(true)
        setStep(3)
      }
      if (p > 76 && p < 96) {
        setStep(4)
        setPlayS1T1(false)
        setPlayS1T2(false)
      }

      if (p > 90 && p < 100) {
        setPlayS1T1(true)
      }

      if (p > 94 && p < 100) {
        setPlayS1T2(true)
      }

    } else {
      setActive(false)
    }
  }, [scrollPosition])

  useEffect(() => {

    let t1 = null
    let t2 = null
    let t3 = null
    let t4 = null
    let t5 = null
    let t6 = null

    if (t1) clearTimeout(t1)
    if (t2) clearTimeout(t2)
    if (t3) clearTimeout(t3)
    if (t4) clearTimeout(t4)
    if (t5) clearTimeout(t5)
    if (t6) clearTimeout(t6)

    if (step == 1) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 4000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 6000)

      t4 = setTimeout(() => {
        setPlay4(true)
      }, 1000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 2) {

      setPlay5(false)
      setPlay6(false)

      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 3) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }

    if (step == 4) {
      setPlay5(false)
      setPlay6(false)
      setIsDisableScroll(true)

      t5 = setTimeout(() => {
        setPlay5(true)
      }, 2000)

      t6 = setTimeout(() => {
        setPlay6(true)
      }, 4000)

      setTimeout(() => {
        setIsDisableScroll(false)
      }, 7000)
    }
  }, [step])

  return (
    <section ref={ref} className={`${styles.root} ${active ? 'active' : ''}`}>
      <div className={`${styles.titleContainer} s${step}`}>
        <Container>
          <Row>
            <Col className="position-relative">
              <h1 className={`${styles.heading} ${play2 ? 'play' : ''}`}>
                <div data-splitting>"A social platform</div>
                <div className="d1" data-splitting>thoughtfully designed</div>
                <div className="d2" data-splitting>for financial communities"</div>
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
          </Row>
        </Container>
      </div>
      <div className={`${styles.blocks} ${isDisableScroll ? 'enable' : ''} ${step > 0 ? 'active' : ''}`}>
        <Phone isActive={isActive} step={step} />
        <div className={`${styles.blocksInner} s${step}`}>
          <Container className="position-relative">
            <div className={`${styles.blockShape}`}>
              <Shape play={play4} />
            </div>
            <Row className="position-relative">
              <Col className={`position-relative`} md={6}>

                <div className={`${styles.colum1} ${styles.blockInner} offset2 ${(step == 2 && playS1T1) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 2 && playS1T1) ? 'play' : ''}`}><div data-splitting>EDUCATION</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 2 && playS1T1) ? 'play' : ''} ${(step == 2 && playS1T2) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Want to know the best way to learn about financial markets?</strong> The best way to learn comes from watching and interacting with those who are already having success</p>
                      </div>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Our platform is built with tools to ease the learning curve.</strong></p>
                        <p>Example: Our Tagging System. Built to show you the creators frame of mind at-a-glance. It highlights Market Sector, Sentiment and Timeframe.. so you too can think like an investor</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.colum1} ${styles.blockInner} ${((step == 4 || step == 5) && playS1T1) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${((step == 4 || step == 5) && playS1T1) ? 'play' : ''}`}><div data-splitting>PERSONAL GROWTH</div></h2>
                  <div>
                    <div style={{ height: "250px" }} className={`${styles.blockParagraph1} ${((step == 4 || step == 5) && playS1T1) ? 'play' : ''} ${((step == 4 || step == 5) && playS1T2) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <ul className={`${styles.list} ${((step == 4 || step == 5) && playS1T1) ? 'play' : ''}`}>
                          <li><IconAllow /><span>Expand your mindset</span></li>
                          <li><IconAllow /><span>Challange your views</span></li>
                          <li><IconAllow /><span>Explore new ideas</span></li>
                          <li><IconAllow /><span>EVOLVE AND GROW AS AN INVESTOR</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="position-relative" md={6}>
                <div className={`${styles.colum2}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 1 && playS1T1) ? 'play' : ''}`}><div data-splitting>TRUST</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 1 && playS1T1) ? 'play' : ''} ${(step == 1 && playS1T2) ? 'play2' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <p><strong>Who can you trust online?</strong> Followers, engagement, views, likes, etc. are not good enough. You need the full data.</p>
                      </div>
                      <div className={`${ts.textRegular}`}>
                        <p>
                          Muunifi takes in <strong>over 100+ data points</strong> in our Content Analytics algorithm. You need the full picture to make an informed decision.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.colum2} ${styles.blockInner} ${(step == 3 && playS1T1) ? 'play' : ''}`}>
                  <h2 className={`${ts.title2} ${styles.blockHeading} ${(step == 3 && playS1T1) ? 'play' : ''}`}><div data-splitting>COMMUNITY</div></h2>
                  <div>
                    <div className={`${styles.blockParagraph1} ${(step == 3 && playS1T1) ? 'play' : ''} mt-4`}>
                      <div className={`${ts.textRegular}`}>
                        <ul className={`${styles.list} ${((step == 3 || step == 5) && playS1T1) ? 'play' : ''}`}>
                          <li><IconAllow /><span>Connect with others.</span></li>
                          <li><IconAllow /><span>Share in each other's journey.</span></li>
                          <li><IconAllow /><span>Learn from one another.</span></li>
                          <li><IconAllow /><span>GROW TOGETHER.</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </section>
  )
}

export default Features;