import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function Alerts(props) {
  return <Alert severity={props.severity}>{props.message}</Alert>;
}
