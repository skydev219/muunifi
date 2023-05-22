import styles from "./Footer.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import { IconFacebook, IconTwitter, IconTiktok, IconYoutube, IconLinkedIn } from "../Icon"

const links = [
  { name: "Terms and conditions", link: "terms" },
  { name: "Privacy policy", link: "privacy" },

]

const Header = () => {

  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col className="d-flex align-items-center order-2 order-md-1" md={7}>
            <div className={styles.navigation}>
              <ul>
                {links.map((link, i) => (
                  <li key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
                ))}
              </ul>
            </div>
          </Col>
          <Col className="d-flex align-items-center order-1 order-md-2" md={5}>
            <div className={styles.socials}>
              <span>Our Social Media:</span>
              <div className={styles.socialInner}>
                <a href="https://www.youtube.com/channel/UCgK1E8yH8yqUPwTanz1p-vA" target="blank"><IconYoutube /></a>
                <a href="https://www.linkedin.com/company/muunifi-com/" target="blank"><IconLinkedIn /></a>
                <a href="https://www.tiktok.com/@muunifi?_t=8WJLV97Cv4V&_r=1" target="blank"><IconTiktok /></a>
                <a href="https://twitter.com/MuunifiSocial" target="blank"><IconTwitter /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;