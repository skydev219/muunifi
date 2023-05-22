import { useEffect, useState, useRef } from "react";
import styles from "./TeamViewer.module.scss"
import { Container, Row, Col } from "react-bootstrap";
import ts from "../../styles/global/typography.module.scss"
import Member from "./Member";

const team = [
  {
    name: "Taylor Perkins",
    role: "Founder and CEO",
    image: "taylor-perkins.png"
  },
  {
    name: "Bob Carroll",
    role: "Co-Founder",
    image: "bob-carroll.png"
  },
  {
    name: "Garrett Openshaw",
    role: "Co-Founder",
    image: "garrett-cpenshaw.png"
  },
  {
    name: "Drew Ingram",
    role: "Co-Founder and CFO",
    image: "drew-ingram.png"
  },
  {
    name: "Jay Rifkin",
    role: "Advisor",
    image: "jay-rifkin.png"
  },
  {
    name: "John Lee Dumas",
    role: "Advisor",
    image: "john-lee-dumas.png"
  },
  {
    name: "Jeff Fons",
    role: "Advisor",
    image: "jeff-fons.png"
  },
  {
    name: "Colleen Fons",
    role: "Advisor",
    image: "colleen-fons.png"
  },
  {
    name: "Evan Tardy",
    role: "Advisor",
    image: "evan-tardy.png"
  },
  {
    name: "Kevin Hart",
    role: "Advisor",
    image: "kevin-hart.png"
  },
  {
    name: "Mitch Perkins",
    role: "Advisor",
    image: "mitch-perkins.png"
  },
  {
    name: "JohnnyZcash",
    role: "Advisor",
    image: "johnnyZCash.png"
  },
  {
    name: "CyrptoBrag",
    role: "Advisor",
    image: "CryptoBrag.png"
  },
  {
    name: "DreadBongo",
    role: "Advisor",
    image: "DreadBongo.png"
  },
  {
    name: "CryptoGambit",
    role: "Advisor",
    image: "CryptoGambit.png"
  },
  {
    name: "Shane Herbert",
    role: "Dev Team",
    image: "shane-herbert.png"
  },
  {
    name: "Ramsey Carroll",
    role: "Dev Team",
    image: "ramsey-carroll.png"
  },
  {
    name: "Jeremiah Lachica",
    role: "Dev Team",
    image: "jeremiah-lachica.png"
  },
  {
    name: "John Michael Doroy",
    role: "Dev Team",
    image: "john-michael-doroy.png"
  },
  {
    name: "JM SANTOS",
    role: "Dev Team",
    image: "JM-SANTOS.png"
  },
  {
    name: "Norman Li",
    role: "Dev Team",
    image: "norman-li.png"
  },
  {
    name: "Connor Hammond",
    role: "Dev Team",
    image: "connor-hammond.png"
  },
  {
    name: "Caleb Strong",
    role: "Dev Team",
    image: "caleb-strong.png"
  },
]

const TeamViewer = ({ isActive, setCanSlide }) => {

  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play4, setPlay4] = useState(false)
  const ref = useRef(null)
  let z = 0

  useEffect(() => {
    if (isActive) {

      setTimeout(() => {
        setPlay1(true)
      }, 200)

      setTimeout(() => {
        setPlay2(true)
      }, 500)

      setTimeout(() => {
        setPlay4(true)
      }, 1000)

    }
  }, [isActive])

  const getIndex = () => {
    let cur = z
    z = z < 3 ? z + 1 : 0
    return cur
  }

  return (
    <section ref={ref} className={`${styles.root}`}>
      <Container>
        <Row className="pb-5">
          <Col className="d-flex justify-content-center" lg={12}>
            <h1 className={`${ts.title} mb-5 ${play1 ? 'play' : ''}`}>
              <div data-splitting>Team</div>
            </h1>
          </Col>
          {team.map((member, i) => (
            <Col style={{ marginTop: `${getIndex() * 2}rem` }} className={`${styles.col}`} key={`mi-${i}`} md={6} lg={3}>
              <Member {...member} isActive={isActive} index={i} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default TeamViewer;