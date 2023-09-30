import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import './style.scss';
import Alerts from './Components/Alert/Alert';
import Loader from './Components/Loader/Loader';
import AccordionPanel from './Components/AccordionPanel/AccordionPanel';
import { appStaticLables } from './constants';

export default function App() {
  const { data, loading, error } = useFetch('./bus.json');
  const [expanded, setExpanded] = useState('panel0');
  const { sectionTitle } = appStaticLables;

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <h1>{sectionTitle}</h1>
      <section>
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
      </section>
    </>
  );
}
