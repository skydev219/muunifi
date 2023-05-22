import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"
import Lottie from 'lottie-web'
import screen3AnimationData from '../../public/animations/screen-3.json'

let screen3Animation = null;

const FeatureMobile3 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const ref = useRef(null)
  const shapeContainerRef = useRef(null)
  let tmr = null
  const screen3AnimationContainer = useRef(null);

  useEffect(() => {
    if (!screen3AnimationContainer.current.querySelector("svg")) {
      screen3Animation = Lottie.loadAnimation({
        container: screen3AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen3AnimationData,
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
        screen3Animation.play()
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
              <Phone isActive={play1}>
                <div className={`${styles.phoneVideo3Mobile}`} ref={screen3AnimationContainer}></div>
              </Phone>
            </div>
            <div ref={shapeContainerRef} className={`${styles.mobile3Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape ref={shapeContainerRef} isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''}`}><div data-splitting>COMMUNITY</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <ul className={`${styles.list} mobile ${play3 ? 'play' : ''}`}>
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
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobile3;