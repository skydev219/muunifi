import { useMemo, useState, useEffect } from "react"
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel } from 'swiper'
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Join from "../sections/Join";
import VisibilitySensor from '../utils/react-visibility-sensor'
import { allowScroll } from "../utils"
import FeatureMobileTitle from "../sections/Features/FeatureMobileTitle";
import FeatureMobile1 from "../sections/Features/FeatureMobile1";
import FeatureMobile2 from "../sections/Features/FeatureMobile2";
import FeatureMobile3 from "../sections/Features/FeatureMobile3";
import FeatureMobile4 from "../sections/Features/FeatureMobile4";
import FeatureTitle from "../sections/Features/FeatureTitle";
import Feature1 from "../sections/Features/Feature1";
import Feature2 from "../sections/Features/Feature2";
import Feature3 from "../sections/Features/Feature3";
import Feature4 from "../sections/Features/Feature4";
import TagManager from 'react-gtm-module'
import appConfig from "../config"
import Script from 'next/script'

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Home'
  },
}

export default function Home({slideToEnd}) {

  const [swiper, setSwiper] = useState(null)
  const [w, setW] = useState(null)
  const [canSlide, setCanSlide] = useState(true)
  const unique_id = new Date().getTime();

  useEffect(()=>{
    if(slideToEnd != 0 && swiper) {
      swiper.slideTo(6, 500)
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [swiper, slideToEnd])

  useEffect(() => {
    setW(window)
    TagManager.dataLayer(tagManagerArgs)
  }, [])

  useEffect(() => {
    if (w) {
      const Splitting = require('splitting');
      Splitting({ by: "chars" });
    }
  }, [w])

  useEffect(() => {
    if (swiper && window.innerWidth < 991 && swiper.__swiper__) swiper.destroy();
  }, [swiper])

  const options = useMemo(() => (
    {
      direction: 'vertical',
      modules: [Navigation, Pagination, Mousewheel],
      mousewheel: true,
      speed: 1000,
    }
  ))

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {w?.innerWidth < 991 ?
        <>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) =>
              <Hero isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) => <FeatureMobileTitle isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) => <FeatureMobile1 isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) => <FeatureMobile2 isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) => <FeatureMobile3 isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) => <FeatureMobile4 isActive={isVisible} />
            }
          </VisibilitySensor>
          <VisibilitySensor minTopValue={100} partialVisibility={true}>
            {({ isVisible }) =>
              <Join isActive={isVisible} />
            }
          </VisibilitySensor>
        </>
        :
        <>
          <Swiper onSwiper={setSwiper} {...options}>
            <SwiperSlide>
              {({ isActive }) => (
                <Hero isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <FeatureTitle isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Feature1 isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Feature2 isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Feature3 isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Feature4 isActive={isActive} />
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <Join isActive={isActive} />
              )}
            </SwiperSlide>
          </Swiper>
        </>
      }
    </>
  )
}
