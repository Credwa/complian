import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GatsbyImage from 'common/components/GatsbyImage';

import PartnerSectionWrapper from './partner.style';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
}) => {
  const data = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "image/saas/partner.png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      contentfulLandingPage {
        videoTitle
        videoInfo
      }
    }
  `);
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
                      <iframe width="560" height="496" src="https://www.youtube.com/embed/7FoXE2rPm8Y" title="YouTube video player" style={{borderRadius: "3px"}}
          border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content={data.contentfulLandingPage.videoTitle}
            />
            <Text
              {...description}
              content={data.contentfulLandingPage.videoInfo}
            />
            <Box>
              <a href="#1">
                <Button {...button} title="LEARN MORE" />
              </a>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
};

PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default PartnerSection;
