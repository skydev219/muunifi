import { useState } from "react"
import styles from "./Header.module.scss"
import Link from "next/link";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import MenuToggler from "./MenuToggler"
import MobileMenu from "./MobileMenu";

const links = [
  { name: "Team", link: "/team" },

  { name: "Content Creators", link: "/creators" },
  { name: "White Paper", link: "/whitepaper" },
  { name: "FAQ", link: "/faq" },

]

const Header = ({ isActiveMobile, setIsActiveMobile, onSlideToEnd }) => {

  const router = useRouter();

  const checkActive = (path) => {
    return router.pathname == path
  }

  return (
    <div className={styles.root}>
      <MobileMenu active={isActiveMobile} links={links} setIsActiveMobile={setIsActiveMobile} />
      <Container>
        <Row>
          <Col>
            <div className={styles.inner}>
              <Link href="/">
                <img className={styles.logo} src="/images/logo.png" alt="Logo" />
              </Link>
              <div className={styles.navigation}>
                <ul>
                  {links.map((link, i) => (
                    <li className={`${checkActive(link.link) ? 'active' : ''}`} key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="d-flex align-items-center">
                <div className={styles.buttons}>
                    <a onClick={()=>onSlideToEnd()} style={{textDecoration: 'none', color: 'inherit'}} target="blank">
                      <Button>Launch App</Button>
                    </a>
                </div>
                <div className={`${styles.mobileActions} ${isActiveMobile ? "active" : ""}`}>
                  <div className={`${styles.headerToggler}`}><MenuToggler isActiveMobile={isActiveMobile} setIsActiveMobile={() => setIsActiveMobile(!isActiveMobile)} /></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;