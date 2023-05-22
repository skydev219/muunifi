import { useState, useEffect } from "react"
import Head from 'next/head'
import PrivacyViewer from "../sections/PrivacyViewer";
import Join from "../sections/Join";
import VisibilitySensor from '../utils/react-visibility-sensor'
import TagManager from 'react-gtm-module'
import appConfig from "../config"

const tagManagerArgs = {
  gtmId: appConfig.gtmId,
  dataLayerName: appConfig.gtmDataLayerName,
  dataLayer: {
    page: 'Privacy'
  },
}

export default function Privacy() {

  useEffect(() => {
    TagManager.dataLayer(tagManagerArgs)
    const Splitting = require('splitting');
    Splitting({ by: "chars" });
  }, [])

  return (
    <>
      <Head>
        <title>Privacy policy</title>
        <meta name="description" content="Privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VisibilitySensor minTopValue={100} partialVisibility={true}>
        {({ isVisible }) =>
          <PrivacyViewer isActive={isVisible} />
        }
      </VisibilitySensor>
      <VisibilitySensor minTopValue={100} partialVisibility={true}>
        {({ isVisible }) =>
          <Join isActive={isVisible} />
        }
      </VisibilitySensor>
    </>
  )
}
