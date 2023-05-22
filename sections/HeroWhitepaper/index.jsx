import { useEffect, useState, useRef } from "react";
import styles from "./HeroWhitepaper.module.scss"
import { Container, Row, Col, Button } from "react-bootstrap";
import ts from "../../styles/global/typography.module.scss"

const HeroCreators = () => {

  const [playSplitting, setPlaySplitting] = useState(false)
  const [play, setPlay] = useState(false)

  useEffect(() => {
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
          <Col className={`text-center`} lg={12}>
            <h1 className={`${ts.title} ${playSplitting ? 'play' : ''}`}>
              <div data-splitting>WHITEPAPER</div>
            </h1>
            <div className={` ${play ? 'play' : ''}`}>
              <div className={`${styles.passwordForm} entry-d-2`}>
                <input autoComplete="off" type="password" placeholder="Password" />
                <button>Submit</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroCreators;