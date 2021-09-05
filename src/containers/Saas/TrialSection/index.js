import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import { useStaticQuery, graphql } from 'gatsby';
import { ButtonGroup } from '../saas.style';

const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  btnStyle,
  outlineBtnStyle,
}) => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLandingPage {
        getStartedTodayTitle
        getStartedTodayInfo
      }
    }
  `);
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...textArea}>
            <Heading
              {...title}
              content={data.contentfulLandingPage.getStartedTodayTitle}
            />
            <Text
              {...description}
              content={data.contentfulLandingPage.getStartedTodayInfo}
            />
            <ButtonGroup className="button_group">
              <Button title="GET STARTED" {...btnStyle} />
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%'],
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
    flexBox: true,
    justifyContent: 'center',
  },
  title: {
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
  },
};

export default TrialSection;
