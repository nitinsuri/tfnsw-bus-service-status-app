import React, { useState, useEffect } from 'react';
import './style.scss';
import Loader from './Loader/Loader';
import { deviationLabel, highlightSubString } from './utils';
import { appStaticLables } from './constants';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [busSeviceData, setBusServiceData] = useState(null);
  const [expanded, setExpanded] = useState('panel0');

  console.log(localStorage.getItem('note1Message'));

  const { sectionTitle, sectionHeaders, textAreaPlaceholder, saveNotesButton } =
    appStaticLables;

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch('./bus.json')
        .then((data) => data.json())
        .then((data) => {
          setLoading(false);
          setBusServiceData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 250);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>{sectionTitle}</h1>
      <section>
        {loading && <Loader />}
        {busSeviceData?.map((service, idx) => (
          <>
            <Accordion
              expanded={expanded === `panel${idx}`}
              onChange={handleAccordionChange(`panel${idx}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${idx}a-content`}
                id={`panel${idx}a-header`}
              >
                <strong>{service.organisation}</strong> - {service.date}
              </AccordionSummary>
              <AccordionDetails>
                <ul className="flat-list">
                  <li className="list-header">
                    <span>{sectionHeaders.busId}</span>
                    <span>{sectionHeaders.variant}</span>
                    <span>{sectionHeaders.deviation}</span>
                  </li>
                  {service.busData.map((serviceData) => {
                    const { busId, routeVariant, deviationFromTimetable } =
                      serviceData;
                    const dvLabel = deviationLabel(deviationFromTimetable);
                    const rvLabel = highlightSubString(routeVariant, 0, 3);
                    return (
                      <li key={busId}>
                        <span>{busId}</span>
                        <span
                          dangerouslySetInnerHTML={{ __html: rvLabel }}
                        ></span>
                        <span className={dvLabel.toLowerCase()}>{dvLabel}</span>
                      </li>
                    );
                  })}
                </ul>
                <Stack spacing={2}>
                  <textarea
                    id={`panel${idx}a-header-notes`}
                    placeholder={textAreaPlaceholder}
                  />
                  <button>{saveNotesButton}</button>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Divider />
          </>
        ))}
      </section>
    </>
  );
}
