import { useRef, useEffect } from "react"
import styles from "./Loader.module.scss"
import { Container, Row, Col } from "react-bootstrap";

const Loader = ({ isLoaded }) => {

  const videoRef1 = useRef(null)

  useEffect(() => {
    //videoRef1.current.play()
  }, [])

  return (
    <div className={`${styles.root} ${isLoaded ? 'loaded' : ''}`}>
      <Container>
        <Row>
          <Col>
            {/* <video
              ref={videoRef1}
              width="256"
              height="256"
              muted="muted"
            >
              <source src="/animations/logo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Loader;