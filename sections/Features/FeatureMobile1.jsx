import { useEffect, useState, useRef } from "react";
import styles from "./Features.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Phone from "./PhoneMobile";
import Shape from "../../components/Shape";
import ts from "../../styles/global/typography.module.scss"
import screen1AnimationData from '../../public/animations/1 screen/screen-1.json'
import Lottie from 'lottie-web'

let screen1Animation = null;

const FeatureMobile1 = ({ isActive }) => {

  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const ref = useRef(null)
  const shapeContainerRef = useRef(null)
  let tmr = null
  const screen1AnimationContainer = useRef(null);

  useEffect(() => {
    if (!screen1AnimationContainer.current.querySelector("svg")) {
      screen1Animation = Lottie.loadAnimation({
        container: screen1AnimationContainer.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: screen1AnimationData,
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

      tmr = setInterval(() => {
        setPlay4(c => !c)
      }, 5000)

      setTimeout(() => {
        screen1Animation.play()
      }, 1500)
    }

    return () => clearInterval(tmr)

  }, [isActive])

  return (
    <section ref={ref} className={`${styles.rootMobile1}`}>
      <div className={`${styles.blocksMobile} mt-5`}>
        <Container>
          <Col>
            <div className={`${styles.phoneM1} ${play3 ? 'play' : ''}`}>
              <Phone isActive={play1}>
                <div className={`${styles.phoneVideo1Mobile}`} ref={screen1AnimationContainer}></div>
              </Phone>
            </div>
            <div ref={shapeContainerRef} className={`${styles.mobile1Inner}`}>
              <div className={`${styles.blockShapeMobile}`}>
                <Shape ref={shapeContainerRef} isLarge play={play1} />
              </div>
              <h2 className={`${ts.title2} ${play2 ? 'play' : ''}`}><div data-splitting>TRUST</div></h2>
              <div className={`${styles.paragraphInner}`}>
                <div className={`${styles.blockParagraph1} mx-auto ${play3 ? 'play' : ''} ${play4 ? 'play2' : ''} mt-4`}>
                  <div className={`${ts.textRegular2}`}>
                    <p><strong>Who can you trust online?</strong> Followers, engagement, views, likes, etc. are not good enough. You need the full data.</p>
                  </div>
                  <div className={`${ts.textRegular2}`}>
                    <p>
                      Muunifi takes in <strong>over 100+ data points</strong> in our Content Analytics algorithm. You need the full picture to make an informed decision.
                    </p>
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

export default FeatureMobile1;