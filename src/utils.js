export const deviationLabel = (val) => {
  let label = '';
  if (val === 0) {
    label = 'On-time';
  } else if (val > 0) {
    label = 'Early';
  } else if (val === null) {
    label = 'Unknown';
  } else {
    label = 'Late';
  }
  return label;
};

export const highlightSubString = (str, s, e) => {
  if (str === 'UNKNOWN') {
    return str;
  }
  if (s === undefined) {
    s = 0;
  }
  if (e === undefined) {
    e = str.length - 1;
  }
  const temp = str.substr(s, e);
  const a = str.replace(temp, `<span class='highlight'>${temp}</span>`);
  return a;
};
