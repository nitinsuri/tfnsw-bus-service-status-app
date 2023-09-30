import React, { useState } from 'react';
import { deviationLabel, highlightSubString } from '../../utils';
import { appStaticLables } from '../../constants';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function AccordionPanel(props) {
  const { service, idx, expanded, handleAccordionChange } = props;
  const savedNote =
    localStorage.getItem(`note${idx}`)?.length > 0
      ? localStorage.getItem(`note${idx}`)
      : '';
  const [note, setNote] = useState(savedNote);
  const { sectionHeaders, textAreaPlaceholder, saveNotesButton } =
    appStaticLables;
  function saveNoteHandler() {
    localStorage.setItem(`note${idx}`, note);
  }
  return (
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
                  <span dangerouslySetInnerHTML={{ __html: rvLabel }}></span>
                  <span className={dvLabel.toLowerCase()}>{dvLabel}</span>
                </li>
              );
            })}
          </ul>
          <Stack spacing={2}>
            <textarea
              id={`panel${idx}a-header-notes`}
              placeholder={textAreaPlaceholder}
              onChange={(e) => setNote(e.target.value)}
            >
              {note}
            </textarea>
            <button onClick={saveNoteHandler}>{saveNotesButton}</button>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
}
