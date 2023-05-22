import { useEffect, useState } from "react";
import styles from "./Join.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import Prefinery from "../../components/Prefinery";

const Join = ({ isActive }) => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)
  const [playPhones, setPlayPhones] = useState(false)

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setPlayPhones(true)
      }, 200)

      setTimeout(() => {
        setPlaySplitting(true)
      }, 500)

      setTimeout(() => {
        setPlay(true)
      }, 1000)
    }
  }, [isActive])

  return (
    <section className={`${styles.root}`}>
      <Container>
        <Row>
          <Col className={`${styles.col1}`} md={12}>
            <h1 className={`${styles.heading} text-center d-none d-md-block ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>JOIN US AS WE BUILD TO BECOME THE WORLD'S</div>
              <div className="d1" data-splitting>LARGEST FINANCIAL NETWORK AND COMMUNITY</div>
              {/* <div className="d2" data-splitting>NETWORK AND COMMUNITY</div> */}
            </h1>
            <h1 className={`${styles.heading} text-center d-block d-md-none  ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>JOIN US AS WE BUILD</div>
              <div className="d1" data-splitting>TO BECOME THE WORLD’S</div>
              <div className="d2" data-splitting>LARGEST FINANCIAL</div>
              <div className="d3" data-splitting>NETWORK AND COMMUNITY</div>
            </h1>
            <div className={`${styles.prefinery}`}><Prefinery/></div>
{/*             <div className={`${styles.markets} ${play ? 'play' : ''}`}>
              <div className="entry-s-1">
                <Link href={`https://muunifi.app`}>
                  <a style={{textDecoration: 'none', color: 'inherit'}} target="blank">
                    <Button variant="info">
                      <div className={`${styles.signup}`}>Sign up</div>
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="entry-s-2">
                <Link href={`https://play.google.com/store/apps/details?id=com.muunifi.android`}>
                  <a target="blank">
                    <Button variant="info">
                      <img src="/images/google-play.png" alt="" />
                    </Button>
                  </a>
                </Link>
              </div>
              <div className="entry-s-3">
                <Link href={`https://apps.apple.com/us/app/muunifi-investing-starts-here/id1616471831`}>
                  <a target="blank">
                    <Button variant="info">
                      <img src="/images/app-store.png" alt="" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  )
}

export default Join;