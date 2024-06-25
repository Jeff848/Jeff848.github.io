import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);
  const [openData, setOpen] = useState(null);
  const theme = useContext(ThemeContext);

  const handleTriggerClick = (name) => {
    setOpen(name);
  };

  const styles = {
    introTextContainer: {
      margin: 10,
      flexDirection: 'column',
      whiteSpace: 'pre-wrap',
      fontSize: '1.0em',
      fontWeight: 500,
    },
    introImageContainer: {
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
    introTriggerContainer: {
      content: '\u2796',
      backgroundColor: theme.accentColor,
      color: 'white',
      margin: '10px',
      fontSize: '20px',
      cursor: 'pointer',
      padding: '18px 200px',
      width: '100%',
      border: 'none',
      textAlign: 'left',
      outline: 'none',
      boxSizing: 'border-box',
    },
  };

  const parseData = (text, trig) => (
    <Collapsible
      onTriggerOpening={() => handleTriggerClick(trig)}
      trigger={trig}
      className="collapsible-tab"
      triggerOpenedClassName="collapsible-tab-open"
      contentOuterClassName="markdown-tab-open"
      triggerClassName="collapsible-tab-close"
      open={openData === trig}
    >
      <ReactMarkdown
        children={text}
        className="markdown-tab"
      />
    </Collapsible>
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    {parseData(data.about, 'About')}
                    {parseData(data.passion, 'Passion')}
                    {parseData(data.problemsolving, 'Problem Solving')}
                    {parseData(data.teamwork, 'Teamwork')}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <div className="profile-image">
                      <img src={data?.imageSource} alt="profile" />
                    </div>
                  </Col>
                </Row>

              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
