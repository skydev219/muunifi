import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import Lottie from 'lottie-web'
import screen2AnimationData from '../../public/animations/screen-2.json'

let screen2Animation = null;

const FeatureMobile2 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const shapeContainerRef = useRef(null)
  const ref = useRef(null)
  let tmr = null
  const screen2AnimationContainer = useRef(null);

  useEffect(() => {
    if (!screen2AnimationContainer.current.querySelector("svg")) {
      screen2Animation = Lottie.loadAnimation({
        container: screen2AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen2AnimationData,
        onSegmentStart: () => { console.log(1) }
      })
    }
  }, [])

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setPlay1(true)
      }, 500)

      setTimeout(() => {
        setPlay2(true)
      }, 1000)

      setTimeout(() => {
        setPlay3(true)
      }, 1500)

      setTimeout(() => {
        screen2Animation.play()
      }, 1500)

      tmr = setInterval(() => {
        setPlay4(c => !c)
      }, 5000)

      return () => clearInterval(tmr)
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile1}`}>
      <div className={`${styles.blocksMobile} mt-5`}>
        <Container>
          <Col>
            <div className={`${styles.phoneM2} ${play3 ? 'play' : ''}`}>
              <Phone isHide={true} isOverflow isActive={play1}>
                <div className={`${styles.phoneVideo2Mobile}`} ref={screen2AnimationContainer}></div>
              </Phone>
            </div>
            <div ref={shapeContainerRef} className={`${styles.mobile1Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape ref={shapeContainerRef} isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''}`}><div data-splitting>EDUCATION</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <p><strong>Want to know the best way to learn about financial markets?</strong> The best way to learn comes from watching and interacting with those who are already having success.</p>
                  </div>
                  <div className={`${ts.textRegular2}`}>
                    <p><strong>Our platform is built with tools to ease the learning curve.</strong></p>
                    <p>Example: Our Tagging System. Built to show you the creators frame of mind at-a-glance. It highlights Market Sector, Sentiment and Timeframe.. so you too can think like an investor</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobile2;