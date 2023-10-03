import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alerts from '../Alert/Alert';
import Button from '../Button/Button';
import { deviationLabel, highlightSubString } from '../../utils';
import { appStaticLabels } from '../../constants';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const AccordionPanel = (props) => {
  const { service, idx, expanded, handleAccordionChange } = props;

  const {
    sectionHeaders,
    textAreaPlaceholder,
    saveNotesButton,
    confirmSaveMessage,
  } = appStaticLabels;
  const { busId, variant, deviation } = sectionHeaders;

  const savedNote =
    localStorage.getItem(`note${idx}`)?.length > 0
      ? localStorage.getItem(`note${idx}`)
      : '';

  const [note, setNote] = useState(savedNote);
  const [message, setMessage] = useState(false);

  function saveNoteHandler() {
    localStorage.setItem(`note${idx}`, note);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 2500);
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
              <span>{busId}</span>
              <span>{variant}</span>
              <span>{deviation}</span>
            </li>
            {service.busData.map((serviceData) => {
              const { busId, routeVariant, deviationFromTimetable } =
                serviceData;
              const { label, status } = deviationLabel(deviationFromTimetable);
              const rvLabel = highlightSubString(routeVariant, 0, 3);
              return (
                <li key={busId}>
                  <span>{busId}</span>
                  <span dangerouslySetInnerHTML={{ __html: rvLabel }}></span>
                  <span>
                    <Chip
                      label={label}
                      color={status}
                      size="small"
                      variant="outlined"
                    />
                  </span>
                </li>
              );
            })}
          </ul>
          <Stack spacing={2}>
            {message && (
              <Alerts severity={'info'} message={confirmSaveMessage} />
            )}
            <textarea
              id={`panel${idx}a-header-notes`}
              placeholder={textAreaPlaceholder}
              onChange={(e) => setNote(e.target.value)}
              defaultValue={note}
            />
            <Button
              style={'save-notes-button'}
              clickHandler={saveNoteHandler}
              label={saveNotesButton}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
};

AccordionPanel.propTypes = {
  service: PropTypes.shape({
    busId: PropTypes.number,
    variant: PropTypes.string,
    deviation: PropTypes.number,
  }),
  idx: PropTypes.number,
  expanded: PropTypes.string,
  appStaticLabels: PropTypes.shape({
    sectionHeaders: PropTypes.string,
    textAreaPlaceholder: PropTypes.string,
    saveNotesButton: PropTypes.string,
    confirmSaveMessage: PropTypes.string,
  }),
  handleAccordionChange: PropTypes.func,
};

export default AccordionPanel;
