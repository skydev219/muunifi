import styles from './Header.module.scss'
import Link from 'next/link';
import { IconYoutube, IconLinkedIn, IconTiktok, IconTwitter } from "../Icon"

const linksTerms = [
  { name: "Terms and conditions", link: "terms" },
  { name: "Privacy policy", link: "privacy" },

]

const MobileMenu = ({ active, links, setIsActiveMobile }) => {

  return (
    <div className={`${styles.mobileNavigationContainer} ${active ? "active" : ""}`}>
      <div className={styles.mobileNavigation}>
        <ul className={`${active ? 'play' : ''}`}>
          {links.map((link, i) => (
            <li onClick={() => setIsActiveMobile(false)} key={`ml-${i}`} className={`d${i}`} data-splitting><Link href={link.link}>{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <div className={`${styles.socials} ${active ? 'active' : ''}`}>
          <span>Our Social Media:</span>
          <div className={styles.socialInner}>
            <a href="https://www.youtube.com/channel/UCgK1E8yH8yqUPwTanz1p-vA" target="blank"><IconYoutube /></a>
            <a href="https://www.linkedin.com/company/muunifi-com/" target="blank"><IconLinkedIn /></a>
            <a href="https://www.tiktok.com/@muunifi?_t=8WJLV97Cv4V&_r=1" target="blank"><IconTiktok /></a>
            <a href="https://twitter.com/MuunifiSocial" target="blank"><IconTwitter /></a>
          </div>
        </div>
        <div className={`${styles.mobileTermsNavigation} ${active ? 'active' : ''}`}>
          <ul>
            {linksTerms.map((link, i) => (
              <li key={`l-${i}`}><Link href={link.link}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;