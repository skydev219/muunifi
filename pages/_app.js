import { useState, useEffect } from "react"
import 'swiper/css'
import "../styles/main.scss"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Header from "../components/Header";
import styles from "./Page.module.scss";
import AnimatedBg from "../components/AnimatedBg";
import { useRouter } from "next/router";
import Loader from '../components/Loader'
import TagManager from 'react-gtm-module'
import appConfig from "../config"
import shortid from "shortid";

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
}

function App({ Component, pageProps }) {

  const [isActiveMobile, setIsActiveMobile] = useState(false)
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [slideToEnd, setSlideToEnd] = useState(0)

  const start = (e) => {
    setIsLoaded(isLoaded)
    setSlideToEnd(0)
  };
  const end = (e) => {
    window.scrollTo(0, 0)
    setIsLoaded(true)
  };

  useEffect(() => {
    window.scrollTo(0, 0)

    TagManager.initialize(tagManagerArgs)

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    setIsLoaded(true)

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [])

  return <>
    <Loader isLoaded={isLoaded} />
    <Header isActiveMobile={isActiveMobile} setIsActiveMobile={setIsActiveMobile} onSlideToEnd={()=>setSlideToEnd(c=>c+1)}/>
    
    {router.pathname != "/_error" && <AnimatedBg />}
    <div className={`${styles.root} ${isActiveMobile ? 'active-mobile' : ''}`} >
      <Component slideToEnd={slideToEnd} {...pageProps} />
    </div>
  </>

}

export default App
