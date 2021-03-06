import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './faqSection.style';

const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Faq {
          id
          title
          description
          expend
        }
      }
      contentfulLandingPage {
        faqHeader
        faqInfoOne
        faqInfoThree
        faqInfoTwo
        faqTitleOne
        faqTitleThree
        faqTitleTwo
      }
    }
  `);

  return (
    <FaqSectionWrapper id="faq_section">
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="row">
          <Accordion>
            <Fragment>
            <AccordionItem expanded={false}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading content={Data.contentfulLandingPage.faqTitleOne} {...titleStyle} />
                        <IconWrapper>
                          <OpenIcon>
                            <Icon icon={minus} size={18} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <Text
                        content={Data.contentfulLandingPage.faqInfoOne}
                        {...descriptionStyle}
                      />
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
                <AccordionItem expanded={false}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading content={Data.contentfulLandingPage.faqTitleTwo} {...titleStyle} />
                        <IconWrapper>
                          <OpenIcon>
                            <Icon icon={minus} size={18} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <Text
                        content={Data.contentfulLandingPage.faqInfoTwo}
                        {...descriptionStyle}
                      />
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
                <AccordionItem expanded={true}>
                  <Fragment>
                    <AccordionTitle>
                      <Fragment>
                        <Heading content={Data.contentfulLandingPage.faqTitleThree} {...titleStyle} />
                        <IconWrapper>
                          <OpenIcon>
                            <Icon icon={minus} size={18} />
                          </OpenIcon>
                          <CloseIcon>
                            <Icon icon={plus} size={18} />
                          </CloseIcon>
                        </IconWrapper>
                      </Fragment>
                    </AccordionTitle>
                    <AccordionBody>
                      <a
                        href={Data.contentfulLandingPage.faqInfoThree}
                        {...descriptionStyle}
                      >{Data.contentfulLandingPage.faqInfoThree}
                        </a>
                    </AccordionBody>
                  </Fragment>
                </AccordionItem>
            </Fragment>
          </Accordion>
          <Box {...buttonWrapper}>
            <a href="#1">
              <Button {...button} />
            </a>
          </Box>
        </Box>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#FF8008',
    mb: '5px',
  },
  // section title default style
  sectionTitle: {
    content: 'Want to ask something about us ?',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#5d646d',
    lineheight: '1.75',
    mb: '0',
    fontWeight: '400',
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    title: 'EXPLORE FORUM',
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`,
  },
};

export default FaqSection;
