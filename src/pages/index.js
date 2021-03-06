import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/theme/saas';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Saas/saas.style';
import Navbar from 'containers/Saas/Navbar';
import BannerSection from 'containers/Saas/BannerSection';
import FeatureSection from 'containers/Saas/FeatureSection';
import VisitorSection from 'containers/Saas/VisitorSection';
import ServiceSection from 'containers/Saas/ServiceSection';
import FaqSection from 'containers/Saas/FaqSection';
import Footer from 'containers/Saas/Footer';
import TrialSection from 'containers/Saas/TrialSection';
import TimelineSection from 'containers/Saas/TimelineSection';
import TestimonialSection from 'containers/Saas/TestimonialSection';
import PartnerSection from 'containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Seo from 'components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const Saas = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulTabTitles {
        landingPageTabTitle
      }
    }
  `);
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <Seo title={data.contentfulTabTitles.landingPageTabTitle} />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <VisitorSection />
          <ServiceSection />
          <TestimonialSection />
          <PartnerSection />
          <TimelineSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Saas;
