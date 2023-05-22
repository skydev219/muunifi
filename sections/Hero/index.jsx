import { useEffect, useState } from "react";
import styles from "./Hero.module.scss"
import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link"
import shortid from "shortid";
import Prefinery from "../../components/Prefinery";

const Hero = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [playPhones, setPlayPhones] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayPhones(true)
    }, 200)

    setTimeout(() => {
      setPlaySplitting(true)
    }, 500)

    setTimeout(() => {
      setPlay(true)
    }, 1000)

  }, [])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${styles.col1} order-2 order-lg-1`} lg={6}>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''} d-block d-lg-none`}>
              <div data-splitting>INVESTING</div>
              <div className="d1" data-splitting>MADE SIMPLE</div>
            </h1>
            <h1 className={`${styles.heading} ${playSplitting ? 'play' : ''} d-none d-lg-block`}>
              <div data-splitting>INVESTING</div>
              <div className="d1" data-splitting>MADE</div>
              <div className="d2" data-splitting>SIMPLE</div>
            </h1>
            <Prefinery/>
            {/* <div className={`${styles.markets} ${play ? 'play' : ''}`}>
              <div className="entry-h-2">
                <Link href={`https://play.google.com/store/apps/details?id=com.muunifi.android`}>
                  <a target="blank">
                    <Button variant="info">
                      <Image
                        src="/images/google-play.png"
                        alt="play market"
                        width={193}
                        height={46}
                      />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="entry-h-1">
                <Link href={`https://apps.apple.com/us/app/muunifi-investing-starts-here/id1616471831`}>
                  <a target="blank">
                    <Button variant="info">
                      <Image
                        src="/images/app-store.png"
                        alt="app store"
                        width={172}
                        height={46}
                      />
                    </Button>
                  </a>
                </Link>
              </div>
            </div> */}
          </Col>
          <Col className="order-1 order-lg-2" lg={6}>
            <div className={`${styles.illustration} ${playPhones ? 'play' : ''}`}>
              <div className={`entry-1 ${styles.img1}`}>
                <Image
                  src="/images/hero-1.png"
                  alt="phone"
                  width={380}
                  height={691}
                />
              </div>
              <div className={`entry-2 ${styles.img2}`}>
                <Image
                  src="/images/hero-2.png"
                  alt="phone"
                  width={355}
                  height={598}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero;