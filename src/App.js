import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from './customHooks/useFetch';
import { appStaticLables } from './constants';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Alerts from './Components/Alert/Alert';
import Loader from './Components/Loader/Loader';
import AccordionPanel from './Components/AccordionPanel/AccordionPanel';
import './style.scss';

const App = () => {
  const { data, loading, error } = useFetch('./bus.json');
  const [expanded, setExpanded] = useState('panel0');
  const { sectionTitle } = appStaticLables;

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Header />
      <main>
        <h1>{sectionTitle}</h1>
        {error && <Alerts severity={'error'} message={error} />}
        {loading && <Loader />}
        {data?.map((service, idx) => (
          <>
            <AccordionPanel
              service={service}
              idx={idx}
              expanded={expanded}
              handleAccordionChange={handleAccordionChange}
            />
          </>
        ))}
      </main>
      <Footer />
    </>
  );
};
App.propTypes = {
  appStaticLables: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
  data: PropTypes.object,
  handleAccordionChange: PropTypes.func,
};

export default App;
