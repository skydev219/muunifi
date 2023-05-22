import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import { IconAllow } from "../../components/Icon"
import Lottie from 'lottie-web'
import screen4AnimationData from '../../public/animations/screen-4.json'

let screen4Animation = null;

const FeatureMobile4 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play5, setPlay5] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const shapeContainerRef = useRef(null)
  const ref = useRef(null)
  let tmr = null
  const screen4AnimationContainer = useRef(null);

  useEffect(() => {
    if (!screen4AnimationContainer.current.querySelector("svg")) {
      screen4Animation = Lottie.loadAnimation({
        container: screen4AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen4AnimationData,
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
        screen4Animation.play()
      }, 1500)

      setTimeout(() => {
        setPlay5(true)
      }, 2500)

      tmr = setInterval(() => {
        setPlay4(c => !c)
      }, 5000)

      return () => clearInterval(tmr)
    }

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile4}`}>
      <div className={`${styles.blocksMobile} mt-5`}>
        <Container>
          <Col>
            <div ref={shapeContainerRef} className={`${styles.mobile4Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape ref={shapeContainerRef} isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''} pt-5`}><div data-splitting>PERSONAL GROWTH</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <ul className={`${styles.list} mobile ${(play5) ? 'play' : ''}`}>
                      <li><IconAllow /><span>Expand your mindset</span></li>
                      <li><IconAllow /><span>Challange your views</span></li>
                      <li><IconAllow /><span>Explore new ideas</span></li>
                      <li><IconAllow /><span>EVOLVE AND GROW AS AN INVESTOR</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.phoneM4} ${play3 ? 'play' : ''}`}>
              <Phone isActive={play1}>
                <div className={`${styles.phoneVideo4Mobile}`} ref={screen4AnimationContainer}></div>
              </Phone>
            </div>
          </Col>
        </Container>
      </div>
    </section>
  )
}

export default FeatureMobile4;