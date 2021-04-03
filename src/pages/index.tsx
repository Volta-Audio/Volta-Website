import React from "react"
import Hero from "containers/Hero"
import Vision from "containers/Vision"
import ArtistsHero from "containers/ArtistsHero"
import ArtistsLearnMore from "containers/ArtistsLearnMore"
import ArtistsRequestAccess from "containers/ArtistsRequestAccess"
import FansHero from "containers/FansHero"
import VoltaLiveLearnMore from "containers/VoltaLiveLearnMore"
import OculusDownload from "containers/OculusDownload"
import NewsletterSignup from "containers/NewsletterSignup"
import RecentPress from "containers/RecentPress"

export default () => (
  <div id="index" style={{ textAlign: "center" }}>
    <Hero />
    <Vision />
    <ArtistsHero />
    <ArtistsLearnMore />
    <ArtistsRequestAccess />
    <FansHero />
    <VoltaLiveLearnMore />
    <OculusDownload />
    <RecentPress />
    <NewsletterSignup />
  </div>
)
