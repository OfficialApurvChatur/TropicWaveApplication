import React from 'react'

import { NavbarComponent } from './component/aNavbarComponent';
import { HeroComponent } from './component/bHeroComponent';
import { SponsorComponent } from './component/cSponsorComponent';
import { AboutComponent } from './component/dAboutComponent';
import { HowItWorkComponent } from './component/eHowItWorkComponent';
import { FeatureComponent } from './component/fFeatureComponent';
import { ServiceComponent } from './component/gServiceComponent';
import { CTAComponent } from './component/hCTAComponent';
import { TestimonialComponent } from './component/iTestimonialComponent';
import { TeamComponent } from './component/jTeamComponent';
import { PricingComponent } from './component/kPricingComponent';
import { NewsletterComponent } from './component/lNewsletterComponent';
import { FAQComponent } from './component/mFAQComponent';
import { FooterComponent } from './component/nFooterComponent';
import { ScrollToTopComponent } from './component/oScrollToTopComponent';


type HomeComponentType = {
  ReduxCall: any
}

const HomeComponent = (props: HomeComponentType) => {
  // JSX
  return (
    <React.Fragment>
      {/* HomeComponent */}

      <div className="overflow-hidden" >
        <NavbarComponent ReduxCall={props.ReduxCall} />
        <HeroComponent ReduxCall={props.ReduxCall} />
        <SponsorComponent />
        <AboutComponent />
        <HowItWorkComponent />
        <FeatureComponent />
        <ServiceComponent />
        <CTAComponent />
        <TestimonialComponent />
        <TeamComponent />
        <PricingComponent />
        <NewsletterComponent />
        <FAQComponent />
        <FooterComponent />
        <ScrollToTopComponent />
      </div>
    </React.Fragment>
  )
}

export default HomeComponent;
